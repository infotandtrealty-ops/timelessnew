const express = require("express");
const { body } = require("express-validator");
const { signup, login, logout, me } = require("../controllers/authController");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/signup",
  [
    body("name").isString().isLength({ min: 2 }).withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Min 6 chars password"),
  ],
  signup
);


router.post(
  "/login",
  [body("email").isEmail().withMessage("Valid email required"), body("password").isLength({ min: 1 })],
  login
);

router.post("/logout", logout);
router.get("/me", auth, me);

module.exports = router;


