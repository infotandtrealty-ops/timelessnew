const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const { name, phone, email, date, time } = req.body || {};
    if (!name || !phone || !date || !time) {
      return res.status(400).json({ error: "name, phone, date and time are required" });
    }
    const parts = String(name).trim().split(/\s+/);
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ");
    const appt = await Appointment.create({ firstName, lastName, phone, email, date, time });
    res.status(201).json(appt);
  } catch (err) {
    res.status(400).json({ error: err.message || "Failed to create appointment" });
  }
};

exports.listAppointments = async (_req, res) => {
  try {
    const appts = await Appointment.find().sort({ createdAt: -1 }).lean();
    res.json(appts);
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to fetch appointments" });
  }
};
