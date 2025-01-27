const studentRepository = require("../repositories/studentRepository");

const addStudent = async (req, res) => {
  try {
    const { name, rollNumber } = req.body;

    console.log("req.user:", req.user); // Debug log
    const teacherId = req.user.id; // Extract teacherId from token

    if (!teacherId) {
      return res.status(400).json({ error: "Teacher ID not found in token." });
    }

    const student = await studentRepository.createStudent({ name, rollNumber, teacherId });
    res.status(201).json({ message: "Student added successfully", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    
    const teacherId = req.user.id;
    const student = await studentRepository.findStudentsByTeacher(teacherId);
    res.status(201).json({ message: "Student are", student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports ={
  addStudent,
  getStudent,
 
}