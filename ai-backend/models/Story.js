const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    quote: { type: String, required: true },
    storyteller: { type: String, required: true, trim: true },
    narrative: { type: String, required: true },
    site: { type: mongoose.Schema.Types.ObjectId, ref: "Site" },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    featured: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);
