// routes/attendanceRoutes.js

const express = require('express');
const router = express.Router();
const { getByUser, markAttendance } = require('../controllers/attendanceController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/:userId', auth, getByUser);
router.post('/', auth, adminOnly, markAttendance);


module.exports = router;
