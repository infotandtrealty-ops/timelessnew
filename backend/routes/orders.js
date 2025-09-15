const express = require("express");
const { auth } = require("../middleware/auth");
const {
  createOrder,
  getUserOrders,
  getOrder,
  createRazorpayOrder,
  verifyPayment
} = require("../controllers/orderController");

const router = express.Router();

// All order routes require authentication
router.use(auth);

// Order routes
router.post("/", createOrder);
router.get("/", getUserOrders);
router.get("/:id", getOrder);
router.post("/razorpay/create", createRazorpayOrder);
router.post("/razorpay/verify", verifyPayment);

module.exports = router;
