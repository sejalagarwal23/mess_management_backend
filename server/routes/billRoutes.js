// routes/billRoutes.js

const express = require('express');
const router = express.Router();

const { 
  getStudentBills, 
  saveMonthlyCosts, 
  generateMonthlyBills,
  getMonthlyCost            
} = require('../controllers/billController');

const { auth, adminOnly } = require('../middleware/auth');

router.put('/monthly-cost', auth, adminOnly, saveMonthlyCosts);
router.get('/monthly-cost', auth, adminOnly, getMonthlyCost); 
router.post('/generate-monthly', auth, adminOnly, generateMonthlyBills);

router.get("/student/:studentId", getStudentBills);

module.exports = router;