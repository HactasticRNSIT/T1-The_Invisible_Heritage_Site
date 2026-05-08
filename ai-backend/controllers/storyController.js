const Story = require("../models/Story");

const fetchStories = async (req, res, forcedQuery = {}) => {
  try {
    const { limit = 6, featured } = { ...req.query, ...forcedQuery };
    const query = { status: "approved" };
    if (featured !== undefined) query.featured = featured === "true";

    const stories = await Story.find(query)
      .sort("-createdAt")
      .limit(Number(limit))
      .populate("site", "name location images");

    res.json({ success: true, stories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getStories = async (req, res) => fetchStories(req, res);

const createStory = async (req, res) => {
  try {
    const story = await Story.create({
      ...req.body,
      submittedBy: req.user?._id,
      status: req.user?.role === "admin" ? "approved" : "pending",
    });

    res.status(201).json({ success: true, story });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getFeaturedStories = async (req, res) => fetchStories(req, res, { featured: "true" });

module.exports = { getStories, getFeaturedStories, createStory };
