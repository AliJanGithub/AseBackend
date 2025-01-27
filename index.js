const express=require("express")
const cors=require("cors")
const app=express()

const connectDB=require("./configs/db")
const attendance = require("./routes/attendanceRoutes")
const teacher = require("./routes/teacherRoutes")
const student = require("./routes/studentRoutes")
connectDB()

app.use(cors({
    origin: "*", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow cookies or authorization headers
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.options("*", cors())
app.get("/",(req,res)=>{
    res.send("Server is running")
})
app.use("/",attendance)
app.use("/",teacher)
app.use("/",student)


app.listen(3000,()=>{
    console.log("listening on http://localhost")
})
module.exports = app;
