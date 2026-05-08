const express = require("express");
const { getAllUsers, changeUserRole, deleteUser } = require("../controllers/adminController");
const { adminOnly } = require("../middleware/adminMiddleware");

const router = express.Router();

// All routes below require a valid JWT + admin role
router.get("/users", adminOnly, getAllUsers);                    // GET    /api/admin/users
router.patch("/users/:id/role", adminOnly, changeUserRole);     // PATCH  /api/admin/users/:id/role
router.delete("/users/:id", adminOnly, deleteUser);             // DELETE /api/admin/users/:id

module.exports = router;
