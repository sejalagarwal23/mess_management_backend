// server.js — Entry point
require('dotenv').config({ path: './.env' });
const connectDB = require('./config/db');
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://hostel-mess-management-ruddy.vercel.app"
    ],
    credentials: true
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
})
.catch((err) => {
  console.log("MongoDB connection failed:", err);
});

// Test Route
app.get("/", (req, res) => {
  res.send("Hostel Harmony API running");
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
const attendanceRoutes = require("./routes/attendanceRoutes");
app.use("/api/attendance", attendanceRoutes);
app.use('/api/leave', require('./routes/leaveRoutes'));
app.use('/api/bills', require('./routes/billRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));