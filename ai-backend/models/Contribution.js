const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["new_site", "photo", "info_update", "oral_history", "review"],
      required: true,
    },

    // For new_site submissions
    siteData: {
      name: String,
      description: String,
      category: String,
      location: {
        address: String,
        district: String,
        state: String,
        coordinates: { lat: Number, lng: Number },
      },
      tags: [String],
      oralHistory: String,
    },

    // For contributions to existing sites
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site" },

    // For photo contributions
    images: [{ type: String }],

    // For info updates
    infoUpdate: { type: String },

    // For reviews/comments
    review: {
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
    },

    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    adminNote: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contribution", contributionSchema);