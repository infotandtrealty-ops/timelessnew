const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    category: { type: String, required: true, trim: true },
    subcategory: { type: String, trim: true },
    images: [{ type: String }],
    stock: { type: Number, default: 0, min: 0 },
    isActive: { type: Boolean, default: true },
    features: [{ type: String }],
    specifications: { type: mongoose.Schema.Types.Mixed },
    tags: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
module.exports = Product;
