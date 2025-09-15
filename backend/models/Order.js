const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{
      type: { type: String, enum: ["product", "course"], required: true },
      itemId: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
      image: { type: String }
    }],
    totalAmount: { type: Number, required: true, min: 0 },
    shippingAddress: {
      name: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true }
    },
    paymentDetails: {
      method: { type: String, enum: ["razorpay", "cod", "card"], default: "razorpay" },
      status: { type: String, enum: ["pending", "completed", "failed", "refunded"], default: "pending" },
      transactionId: { type: String },
      razorpayOrderId: { type: String },
      razorpayPaymentId: { type: String },
      razorpaySignature: { type: String }
    },
    orderStatus: { 
      type: String, 
      enum: ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"], 
      default: "pending" 
    },
    notes: { type: String },
    trackingNumber: { type: String },
    estimatedDelivery: { type: Date }
  },
  { timestamps: true }
);

// Generate order number before saving
orderSchema.pre("save", async function(next) {
  if (!this.orderNumber) {
    const count = await mongoose.model("Order").countDocuments();
    this.orderNumber = `ORD-${Date.now()}-${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
module.exports = Order;
