const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["temple", "battlefield", "architecture", "natural", "sacred", "monument", "other"],
      default: "other",
    },
    location: {
      address: { type: String },
      district: { type: String },
      state: { type: String },
      country: { type: String, default: "India" },
      coordinates: { lat: { type: Number }, lng: { type: Number } },
    },
    languages: [{ type: String }],
    tags: [{ type: String }],
    images: [{ type: String }],
    badge: { type: String, default: "Heritage Site" },
    visibilityScore: { type: Number, min: 0, max: 100, default: 50 },
    riskLabel: { type: String },
    aiStory: { type: String },
    oralHistory: { type: String },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "approved" },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    visitCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    hiddenGem: { type: Boolean, default: false },
  },
  { timestamps: true }
);

siteSchema.index({ name: "text", description: "text", tags: "text", "location.district": "text" });

module.exports = mongoose.model("Site", siteSchema);
