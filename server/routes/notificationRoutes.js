// routes/notificationRoutes.js


const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controllers/notificationController');
const { auth, adminOnly } = require('../middleware/auth');

router.get('/', auth, getAll);
router.post('/', auth, adminOnly, create);

module.exports = router;
