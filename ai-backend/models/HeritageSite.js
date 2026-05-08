const mongoose = require("mongoose");

const heritageSiteSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    state: String,
    district: String,
    description: String,
    history: String,
    folklore: String,
    images: [String],

    coordinates: {
      lat: Number,
      lng: Number
    },

    visibilityScore: {
      type: Number,
      default: 50
    },

    tags: [String]
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeritageSite", heritageSiteSchema);