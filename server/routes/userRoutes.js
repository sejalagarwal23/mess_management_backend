// routes/userRoutes.js


const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, searchUsers, deleteUser } = require('../controllers/userController');
const { auth } = require('../middleware/auth');

const { adminOnly } = require('../middleware/auth');
const User = require('../models/User');

// GET all students (admin only)
router.get('/students', auth, adminOnly, async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password');

    res.json(
      students.map(user => ({
        id: user._id,
        name: user.name,
        rollNumber: user.rollNumber,
        role: user.role,
        phone: user.phone,
        email: user.email,
        hostelNumber: user.hostelNumber,
        semester: user.semester
      }))
    );

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/', auth, getAllUsers);
router.get('/search', auth, searchUsers);
router.get('/:id', auth, getUserById);
router.delete('/:id', auth, adminOnly, deleteUser);
module.exports = router;
