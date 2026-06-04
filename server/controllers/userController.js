// controllers/userController.js

const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
 res.json(users.map(user => ({
  id: user._id,
  name: user.name,
  rollNumber: user.rollNumber,
  role: user.role,
  phone: user.phone,
  email: user.email,
  hostelNumber: user.hostelNumber,
  semester: user.semester
})));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
   res.json({
  id: user._id,
  name: user.name,
  rollNumber: user.rollNumber,
  role: user.role,
  phone: user.phone,
  email: user.email,
  hostelNumber: user.hostelNumber,
  semester: user.semester
});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchUsers = async (req, res) => {
  try {
    const q = req.query.q || '';
    const users = await User.find({
      $or: [
        { rollNumber: { $regex: q, $options: 'i' } },
        { name: { $regex: q, $options: 'i' } },
      ]
    }).select('-password');
   res.json(users.map(user => ({
  id: user._id,
  name: user.name,
  rollNumber: user.rollNumber,
  role: user.role,
  phone: user.phone,
  email: user.email,
  hostelNumber: user.hostelNumber,
  semester: user.semester
})));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// server/controllers/userController.js
exports.deleteUser = async (req, res) => {
  console.log("DELETE request params:", req.params);
  console.log("Authenticated user:", req.user);
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

  await User.deleteOne({ _id: req.params.id });
    console.log("User deleted:", user._id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};