const express = require("express");
const { auth, requireRole } = require("../middleware/auth");
const {
  getDashboardStats,
  getAllUsers,
  deleteUser,
  updateUserRole,
  getAllOrders,
  updateOrderStatus,
  getAllProducts,
  getAllCourses,
  getAllLeads,
  deleteLead
} = require("../controllers/adminController");

const router = express.Router();

// All admin routes require authentication and admin role
router.use(auth);
router.use(requireRole('admin'));

// Dashboard
router.get("/dashboard", getDashboardStats);

// User Management
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id/role", updateUserRole);

// Order Management
router.get("/orders", getAllOrders);
router.patch("/orders/:id/status", updateOrderStatus);

// Product Management
router.get("/products", getAllProducts);

// Course Management
router.get("/courses", getAllCourses);

// Lead Management
router.get("/leads", getAllLeads);
router.delete("/leads/:id", deleteLead);

module.exports = router;
