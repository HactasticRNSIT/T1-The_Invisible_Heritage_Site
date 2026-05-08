const User = require("../models/User");

// GET /api/admin/users  — list all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json({ success: true, count: users.length, users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// PATCH /api/admin/users/:id/role  — change a user's role
const changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const allowed = ["visitor", "contributor", "admin"];

    if (!allowed.includes(role)) {
      return res.status(400).json({ success: false, message: `Role must be one of: ${allowed.join(", ")}` });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: `Role updated to '${role}'`, user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// DELETE /api/admin/users/:id  — delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getAllUsers, changeUserRole, deleteUser };
