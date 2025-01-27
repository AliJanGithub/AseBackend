const express = require("express");
const app = express();
const cors=require("cors")
const {
  markAttendance,
  getAttendanceByTeacher,
} = require("../controllers/attendanceController");
const verifyToken = require("../configs/verifyToken.js");

const attendance = express.Router();
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from your frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
  credentials: true, // Allow cookies or authorization headers
}));
attendance.post("/mark",verifyToken, markAttendance);
attendance.get("/getStudents",verifyToken, getAttendanceByTeacher);

module.exports = attendance;
