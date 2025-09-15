const express = require("express");
const router = express.Router();
const {
  createAppointment,
  listAppointments,
} = require("../controllers/appointmentController");

router.post("/", createAppointment);
router.get("/", listAppointments);

module.exports = router;
