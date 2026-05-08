const { protect, authorize } = require("./authMiddleware");

// Convenience stack: first verify JWT, then check admin role
const adminOnly = [protect, authorize("admin")];

// Convenience stack: allow admin OR contributor
const contributorOrAdmin = [protect, authorize("admin", "contributor")];

module.exports = { adminOnly, contributorOrAdmin };
