const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

// Route imports
const authRoutes         = require("./routes/authRoutes");
const adminRoutes        = require("./routes/adminRoutes");
const aiRoutes           = require("./routes/aiRoutes");
const siteRoutes         = require("./routes/siteRoutes");
const contributionRoutes = require("./routes/contributionRoutes");
const storyRoutes        = require("./routes/storyRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Global middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ success: true, message: "HeritageLens Backend Running 🚀" });
});

// API routes
app.use("/api/auth",          authRoutes);
app.use("/api/admin",         adminRoutes);
app.use("/api",               aiRoutes);
app.use("/api/sites",         siteRoutes);
app.use("/api/contributions", contributionRoutes);
app.use("/api/stories",       storyRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
