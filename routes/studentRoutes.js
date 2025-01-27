const express = require("express");
const app = express();
const cors=require("cors")
const { addStudent,getStudent } = require("../controllers/studentController");
const verifyToken = require("../configs/verifyToken.js");

const student = express.Router();
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies or authorization headers
}));
student.post("/add",verifyToken, addStudent);
student.get("/get",verifyToken,getStudent)

module.exports = student;
