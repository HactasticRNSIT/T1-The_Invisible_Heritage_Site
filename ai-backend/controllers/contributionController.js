const Contribution = require("../models/Contribution");
const Site = require("../models/Site");

// ─── POST /api/contributions ──────────────────────────────────────────────────
// Any logged-in user can submit a contribution
const createContribution = async (req, res) => {
  try {
    const { type } = req.body;

    if (!type) {
      return res.status(400).json({ success: false, message: "Contribution type is required" });
    }

    const contribution = await Contribution.create({
      ...req.body,
      submittedBy: req.user._id,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Contribution submitted for review",
      contribution,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── GET /api/contributions ───────────────────────────────────────────────────
// Admin: get all contributions with optional status filter
const getAllContributions = async (req, res) => {
  try {
    const { status, type, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (type)   query.type   = type;

    const skip = (Number(page) - 1) * Number(limit);

    const [contributions, total] = await Promise.all([
      Contribution.find(query)
        .sort("-createdAt")
        .skip(skip)
        .limit(Number(limit))
        .populate("submittedBy", "name email")
        .populate("site", "name"),
      Contribution.countDocuments(query),
    ]);

    res.json({ success: true, total, contributions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── GET /api/contributions/my ────────────────────────────────────────────────
// Logged-in user views their own contributions
const getMyContributions = async (req, res) => {
  try {
    const contributions = await Contribution.find({ submittedBy: req.user._id })
      .sort("-createdAt")
      .populate("site", "name");

    res.json({ success: true, contributions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── GET /api/contributions/site/:siteId ─────────────────────────────────────
// Get approved reviews/comments for a specific site (public)
const getSiteReviews = async (req, res) => {
  try {
    const reviews = await Contribution.find({
      site: req.params.siteId,
      type: "review",
      status: "approved",
    })
      .sort("-createdAt")
      .populate("submittedBy", "name");

    res.json({ success: true, reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── PATCH /api/contributions/:id/review ─────────────────────────────────────
// Admin approves or rejects a contribution
const reviewContribution = async (req, res) => {
  try {
    const { status, adminNote } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }

    const contribution = await Contribution.findById(req.params.id);
    if (!contribution) {
      return res.status(404).json({ success: false, message: "Contribution not found" });
    }

    contribution.status    = status;
    contribution.adminNote = adminNote || "";
    await contribution.save();

    // If approved, apply the contribution to the actual site
    if (status === "approved") {
      await applyContribution(contribution);
    }

    res.json({ success: true, message: `Contribution ${status}`, contribution });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ─── Helper: apply an approved contribution to the Site model ─────────────────
async function applyContribution(contribution) {
  try {
    if (contribution.type === "new_site" && contribution.siteData) {
      // Create a new approved site from the submission
      await Site.create({
        ...contribution.siteData,
        submittedBy: contribution.submittedBy,
        status: "approved",
      });
    }

    if (contribution.type === "photo" && contribution.site && contribution.images?.length) {
      await Site.findByIdAndUpdate(contribution.site, {
        $push: { images: { $each: contribution.images } },
      });
    }

    if (contribution.type === "info_update" && contribution.site && contribution.infoUpdate) {
      // Append to description
      await Site.findByIdAndUpdate(contribution.site, {
        $set: { description: contribution.infoUpdate },
      });
    }

    if (contribution.type === "oral_history" && contribution.site) {
      await Site.findByIdAndUpdate(contribution.site, {
        $set: { oralHistory: contribution.infoUpdate },
      });
    }

    if (contribution.type === "review" && contribution.site && contribution.review?.rating) {
      // Recalculate average rating
      const site = await Site.findById(contribution.site);
      if (site) {
        const newTotal  = site.totalReviews + 1;
        const newAvg    = ((site.averageRating * site.totalReviews) + contribution.review.rating) / newTotal;
        await Site.findByIdAndUpdate(contribution.site, {
          averageRating: Math.round(newAvg * 10) / 10,
          totalReviews: newTotal,
        });
      }
    }
  } catch (err) {
    console.error("Failed to apply contribution:", err);
  }
}

module.exports = {
  createContribution,
  getAllContributions,
  getMyContributions,
  getSiteReviews,
  reviewContribution,
};