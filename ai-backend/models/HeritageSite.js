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
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    languages: [{ type: String }],         // available content languages
    tags: [{ type: String }],              // searchable keywords
    images: [{ type: String }],            // image URLs
    aiStory: { type: String },             // AI-generated narrative
    oralHistory: { type: String },         // community-contributed oral history
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",                 // admin-created sites are auto-approved
    },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    visitCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Full-text search index
siteSchema.index({ name: "text", description: "text", tags: "text", "location.district": "text" });

module.exports = mongoose.model("Site", siteSchema);