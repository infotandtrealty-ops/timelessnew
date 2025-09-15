const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    shortDescription: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    category: { type: String, required: true, trim: true },
    subcategory: { type: String, trim: true },
    images: [{ type: String }],
    duration: { type: String, trim: true }, // e.g., "3 months", "6 weeks"
    level: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "beginner" },
    instructor: { type: String, trim: true },
    curriculum: [{ 
      title: String,
      description: String,
      duration: String
    }],
    requirements: [{ type: String }],
    benefits: [{ type: String }],
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    maxStudents: { type: Number, default: 50 },
    enrolledStudents: { type: Number, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
module.exports = Course;
