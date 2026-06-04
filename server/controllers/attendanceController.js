// controllers/attendanceController.js

const Attendance = require("../models/Attendance");


// GET attendance for a student for a specific month
exports.getByUser = async (req, res) => {
  try {

    const { userId } = req.params;
    const { month } = req.query; // format: 2026-03

    const filter = { userId };

    if (month) {
      const [year, monthNumber] = month.split("-");

      const startDate = new Date(year, monthNumber - 1, 1);
      const endDate = new Date(year, monthNumber, 0, 23, 59, 59);

      filter.date = {
        $gte: startDate,
        $lte: endDate
      };
    }

    const records = await Attendance
      .find(filter)
      .sort({ date: 1 });

    res.json(records);

  } catch (err) {
    console.error("Fetch Attendance Error:", err);
    res.status(500).json({ error: err.message });
  }
};



// Mark attendance (Admin side)
exports.markAttendance = async (req, res) => {
  try {

    const { userId, date, status } = req.body;

    if (!userId || !date || !status) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const attendance = await Attendance.findOneAndUpdate(
      {
        userId,
        date: new Date(date)   // ensure date format matches DB
      },
      {
        status
      },
      {
        new: true,
        upsert: true
      }
    );

    res.json(attendance);

  } catch (error) {
    console.error("Attendance Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};