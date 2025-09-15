const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true },
    phone: { type: String, trim: true, required: true },
    email: { type: String, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
