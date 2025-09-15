const Order = require("../models/Order");
const Product = require("../models/Product");
const Course = require("../models/Course");
const User = require("../models/User");
const crypto = require("crypto");

// Create Order
exports.createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod = "razorpay" } = req.body;
    const userId = req.user.id;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Items are required" });
    }

    if (!shippingAddress) {
      return res.status(400).json({ error: "Shipping address is required" });
    }

    // Validate items and calculate total
    let totalAmount = 0;
    const validatedItems = [];

    for (const item of items) {
      if (item.type === "product") {
        const product = await Product.findById(item.itemId);
        if (!product) {
          return res.status(404).json({ error: `Product ${item.itemId} not found` });
        }
        if (product.stock < item.quantity) {
          return res.status(400).json({ error: `Insufficient stock for ${product.name}` });
        }
        validatedItems.push({
          type: "product",
          itemId: product._id,
          name: product.name,
          price: product.price,
          quantity: item.quantity,
          image: product.images[0]
        });
        totalAmount += product.price * item.quantity;
      } else if (item.type === "course") {
        const course = await Course.findById(item.itemId);
        if (!course) {
          return res.status(404).json({ error: `Course ${item.itemId} not found` });
        }
        validatedItems.push({
          type: "course",
          itemId: course._id,
          name: course.title,
          price: course.price,
          quantity: 1,
          image: course.images[0]
        });
        totalAmount += course.price;
      }
    }

    // Create order
    const order = await Order.create({
      user: userId,
      items: validatedItems,
      totalAmount,
      shippingAddress,
      paymentDetails: {
        method: paymentMethod,
        status: "pending"
      }
    });

    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10 } = req.query;

    const orders = await Order.find({ user: userId })
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments({ user: userId });

    res.json({
      orders,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single Order
exports.getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const order = await Order.findOne({ _id: id, user: userId });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create Razorpay Order
exports.createRazorpayOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    const razorpay = require("razorpay");
    const instance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: order.totalAmount * 100, // Convert to paise
      currency: "INR",
      receipt: order.orderNumber,
      notes: {
        orderId: order._id.toString(),
        userId: req.user.id
      }
    };

    const razorpayOrder = await instance.orders.create(options);

    // Update order with razorpay order ID
    order.paymentDetails.razorpayOrderId = razorpayOrder.id;
    await order.save();

    res.json({
      order: razorpayOrder,
      orderId: order._id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify Payment
exports.verifyPayment = async (req, res) => {
  try {
    const { orderId, paymentId, signature } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    // Verify signature
    const razorpay = require("razorpay");
    const instance = new razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${order.paymentDetails.razorpayOrderId}|${paymentId}`)
      .digest("hex");

    if (generatedSignature !== signature) {
      return res.status(400).json({ error: "Invalid payment signature" });
    }

    // Update order payment details
    order.paymentDetails.status = "completed";
    order.paymentDetails.razorpayPaymentId = paymentId;
    order.paymentDetails.razorpaySignature = signature;
    order.paymentDetails.transactionId = paymentId;
    order.orderStatus = "confirmed";

    // Update product stock
    for (const item of order.items) {
      if (item.type === "product") {
        await Product.findByIdAndUpdate(
          item.itemId,
          { $inc: { stock: -item.quantity } }
        );
      } else if (item.type === "course") {
        await Course.findByIdAndUpdate(
          item.itemId,
          { $inc: { enrolledStudents: 1 } }
        );
      }
    }

    await order.save();

    res.json({ 
      message: "Payment verified successfully",
      order 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
