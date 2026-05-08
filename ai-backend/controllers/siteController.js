const Site = require("../models/Site");
const { generateHeritageStory } = require("../services/openaiService");

const publicSiteFields =
  "name description category location images tags badge visibilityScore riskLabel averageRating totalReviews visitCount featured hiddenGem createdAt";

const buildSiteQuery = (queryParams) => {
  const { search, category, district, state, tags, hiddenGem, featured } = queryParams;
  const query = { status: "approved" };

  if (search) query.$text = { $search: search };
  if (category && category !== "All") query.category = new RegExp(`^${category}$`, "i");
  if (district) query["location.district"] = new RegExp(district, "i");
  if (state) query["location.state"] = new RegExp(state, "i");
  if (tags) query.tags = { $in: tags.split(",").map((tag) => tag.trim()) };
  if (hiddenGem !== undefined) query.hiddenGem = hiddenGem === "true";
  if (featured !== undefined) query.featured = featured === "true";

  return query;
};

const formatMapSite = (site) => ({
  _id: site._id,
  name: site.name,
  category: site.category,
  state: site.location?.state,
  district: site.location?.district,
  description: site.description,
  image: site.images?.[0] || "",
  latitude: site.location?.coordinates?.lat,
  longitude: site.location?.coordinates?.lng,
});

const getAllSites = async (req, res) => {
  try {
    const { page = 1, limit = 12, sort = "-createdAt" } = req.query;
    const query = buildSiteQuery(req.query);
    const skip = (Number(page) - 1) * Number(limit);

    const [sites, total] = await Promise.all([
      Site.find(query).sort(sort).skip(skip).limit(Number(limit)).select(publicSiteFields),
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

const getFeaturedSites = async (req, res) => {
  try {
    const limit = Number(req.query.limit || 6);
    let sites = await Site.find({ status: "approved", featured: true })
      .sort("-averageRating -visitCount -createdAt")
      .limit(limit)
      .select(publicSiteFields);

    if (!sites.length) {
      sites = await Site.find({ status: "approved" })
        .sort("-averageRating -visitCount -createdAt")
        .limit(limit)
        .select(publicSiteFields);
    }

    res.json({ success: true, sites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getHiddenGems = async (req, res) => {
  try {
    const limit = Number(req.query.limit || 6);
    let sites = await Site.find({ status: "approved", hiddenGem: true })
      .sort("visibilityScore -createdAt")
      .limit(limit)
      .select(publicSiteFields);

    if (!sites.length) {
      sites = await Site.find({ status: "approved", visibilityScore: { $lte: 45 } })
        .sort("visibilityScore -createdAt")
        .limit(limit)
        .select(publicSiteFields);
    }

    res.json({ success: true, sites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getMapSites = async (req, res) => {
  try {
    const query = buildSiteQuery(req.query);
    query["location.coordinates.lat"] = { $ne: null };
    query["location.coordinates.lng"] = { $ne: null };

    const sites = await Site.find(query)
      .sort("name")
      .select("name category location description images")
      .limit(Number(req.query.limit || 200));

    res.json({ success: true, sites: sites.map(formatMapSite) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getSiteById = async (req, res) => {
  try {
    const site = await Site.findById(req.params.id).populate("submittedBy", "name email");
    if (!site) return res.status(404).json({ success: false, message: "Site not found" });

    Site.findByIdAndUpdate(req.params.id, { $inc: { visitCount: 1 } }).exec();
    res.json({ success: true, site });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const createSite = async (req, res) => {
  try {
    const site = await Site.create({ ...req.body, submittedBy: req.user._id, status: "approved" });
    res.status(201).json({ success: true, site });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

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

const getRecommendations = async (req, res) => {
  try {
    const { categories, state, limit = 6 } = req.query;
    const query = { status: "approved" };
    if (categories) query.category = { $in: categories.split(",") };
    if (state) query["location.state"] = new RegExp(state, "i");

    const sites = await Site.find(query)
      .sort("-averageRating -visitCount")
      .limit(Number(limit))
      .select(publicSiteFields);

    res.json({ success: true, sites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getAllSites,
  getFeaturedSites,
  getHiddenGems,
  getMapSites,
  getSiteById,
  createSite,
  updateSite,
  deleteSite,
  generateStoryForSite,
  getRecommendations,
};
