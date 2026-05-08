const Site = require("../models/Site");
const { generateHeritageStory } = require("../services/openaiService");

// ─── GET /api/sites ───────────────────────────────────────────────────────────
// List all approved sites with optional search, filter & pagination
const getAllSites = async (req, res) => {
  try {
    const {
      search,
      category,
      district,
      state,
      tags,
      page = 1,
      limit = 12,
      sort = "-createdAt",
    } = req.query;

    const query = { status: "approved" };

    // Full-text search
    if (search) {
      query.$text = { $search: search };
    }

    // Filters
    if (category) query.category = category;
    if (district) query["location.district"] = new RegExp(district, "i");
    if (state)    query["location.state"]    = new RegExp(state, "i");
    if (tags)     query.tags = { $in: tags.split(",").map((t) => t.trim()) };

    const skip = (Number(page) - 1) * Number(limit);

    const [sites, total] = await Promise.all([
      Site.find(query)
        .sort(sort)
        .skip(skip)
        .limit(Number(limit))
        .select("-aiStory -oralHistory"), // keep list response light
      Site.countDocuments(query),
    ]);

    res.json({
      success: true,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      sites,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── GET /api/sites/:id ───────────────────────────────────────────────────────
const getSiteById = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id).populate("submittedBy", "name email");
    if (!site) return res.status(404).json({ success: false, message: "Site not found" });

    // Increment visit counter (fire-and-forget)
    Site.findByIdAndUpdate(req.params.id, { $inc: { visitCount: 1 } }).exec();

    res.json({ success: true, site });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── POST /api/sites ──────────────────────────────────────────────────────────
// Admin creates a verified site directly
const createSite = async (req, res) => {
  try {
    const site = await Site.create({ ...req.body, submittedBy: req.user._id, status: "approved" });
    res.status(201).json({ success: true, site });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── PUT /api/sites/:id ───────────────────────────────────────────────────────
const updateSite = async (req, res) => {
  try {
    const site = await Site.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!site) return res.status(404).json({ success: false, message: "Site not found" });
    res.json({ success: true, site });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── DELETE /api/sites/:id ────────────────────────────────────────────────────
const deleteSite = async (req, res) => {
  try {
    const site = await Site.findByIdAndDelete(req.params.id);
    if (!site) return res.status(404).json({ success: false, message: "Site not found" });
    res.json({ success: true, message: "Site deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── POST /api/sites/:id/generate-story ──────────────────────────────────────
// Generate & save an AI narrative for a specific site
const generateStoryForSite = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id);
    if (!site) return res.status(404).json({ success: false, message: "Site not found" });

    const story = await generateHeritageStory({
      name: site.name,
      description: site.description,
      category: site.category,
      location: site.location,
      tags: site.tags,
      oralHistory: site.oralHistory,
    });

    site.aiStory = story;
    await site.save();

    res.json({ success: true, story });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "AI generation failed" });
  }
};

// ─── GET /api/sites/recommendations ──────────────────────────────────────────
// Personalised recommendations based on category & location preferences
const getRecommendations = async (req, res) => {
  try {
    const { categories, state, limit = 6 } = req.query;

    const query = { status: "approved" };
    if (categories) query.category = { $in: categories.split(",") };
    if (state)       query["location.state"] = new RegExp(state, "i");

    const sites = await Site.find(query)
      .sort("-averageRating -visitCount")
      .limit(Number(limit))
      .select("name category location images averageRating visitCount tags");

    res.json({ success: true, sites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getAllSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
  generateStoryForSite,
  getRecommendations,
};