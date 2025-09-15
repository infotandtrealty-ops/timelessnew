const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String, trim: true },
    category: { type: String, required: true, trim: true },
    subcategory: { type: String, trim: true },
    images: [{ type: String }],
    price: { type: Number, min: 0 },
    duration: { type: String, trim: true }, // e.g., "2 hours", "1 session"
    benefits: [{ type: String }],
    procedure: [{ 
      step: Number,
      title: String,
      description: String
    }],
    aftercare: [{ type: String }],
    contraindications: [{ type: String }],
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    tags: [{ type: String }],
    metaTitle: { type: String },
    metaDescription: { type: String },
  },
  { timestamps: true }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
module.exports = Service;
