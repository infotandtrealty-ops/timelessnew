const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// MongoDB connection
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || process.env.DB_URI || "";
if (!mongoUri) {
  console.error("Missing MongoDB connection string. Please set MONGODB_URI in .env");
}

mongoose
  .connect(mongoUri, { dbName: process.env.DB_NAME || "timeless" })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// Lead schema
const leadSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const Lead = mongoose.model("Lead", leadSchema);

// Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/leads", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body || {};
    const lead = await Lead.create({ firstName, lastName, email, phone, service, message });
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ error: err.message || "Failed to create lead" });
  }
});

app.get("/api/leads", async (_req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message || "Failed to fetch leads" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


