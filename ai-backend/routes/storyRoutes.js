const express = require("express");
const { createStory, getFeaturedStories, getStories } = require("../controllers/storyController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getStories);
router.get("/featured", getFeaturedStories);
router.post("/", protect, createStory);

module.exports = router;
