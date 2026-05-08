const express = require("express");
const {
  getAllSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
  generateStoryForSite,
  getRecommendations,
} = require("../controllers/siteController");

const { protect }    = require("../middleware/authMiddleware");
const { adminOnly }  = require("../middleware/adminMiddleware");

const router = express.Router();

// Public
router.get("/",                       getAllSites);           // GET  /api/sites
router.get("/recommendations",        getRecommendations);   // GET  /api/sites/recommendations
router.get("/:id",                    getSiteById);          // GET  /api/sites/:id

// Protected (admin only)
router.post("/",                      protect, adminOnly, createSite);                     // POST   /api/sites
router.put("/:id",                    protect, adminOnly, updateSite);                     // PUT    /api/sites/:id
router.delete("/:id",                 protect, adminOnly, deleteSite);                     // DELETE /api/sites/:id
router.post("/:id/generate-story",    protect, adminOnly, generateStoryForSite);           // POST   /api/sites/:id/generate-story

module.exports = router;