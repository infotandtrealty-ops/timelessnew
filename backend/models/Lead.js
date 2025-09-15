// backend/models/Lead.js
const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true, required: true },
    service: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Lead || mongoose.model("Lead", leadSchema);
