const express = require("express");
const app = express();
const cors=require("cors")
const { registerTeacher } = require("../controllers/teacherController");

const teacher = express.Router();
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies or authorization headers
}));
teacher.post("/register", registerTeacher);

module.exports = teacher;
