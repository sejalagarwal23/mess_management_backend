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
