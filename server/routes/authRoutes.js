// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const { login, register, changePassword  } = require('../controllers/authController');
const { auth, adminOnly } = require('../middleware/auth');

router.post('/login', login);
router.post('/register',auth, adminOnly, register); // Only admins can create users
router.put('/change-password', auth, changePassword);

module.exports = router;
