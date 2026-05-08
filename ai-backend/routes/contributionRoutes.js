const express = require("express");
const {
  createContribution,
  getAllContributions,
  getMyContributions,
  getSiteReviews,
  reviewContribution,
} = require("../controllers/contributionController");

const { protect }   = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

// Public
router.get("/site/:siteId",         getSiteReviews);                          // GET  /api/contributions/site/:siteId

// Logged-in users
router.post("/",                    protect, createContribution);             // POST /api/contributions
router.get("/my",                   protect, getMyContributions);             // GET  /api/contributions/my

// Admin only
router.get("/",                     protect, adminOnly, getAllContributions);             // GET   /api/contributions
router.patch("/:id/review",         protect, adminOnly, reviewContribution);             // PATCH /api/contributions/:id/review

module.exports = router;