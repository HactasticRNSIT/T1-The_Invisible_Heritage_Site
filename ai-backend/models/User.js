const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true,
      select: false
    },

    role: {
      type: String,
      enum: ["visitor", "contributor", "admin"],
      default: "visitor"
    },

    savedSites: [String],

    interests: [String],

    language: {
      type: String,
      default: "English"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
