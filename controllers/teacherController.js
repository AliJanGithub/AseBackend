const teacherRepository = require("../repositories/teacherRepository");
const jwt=require("jsonwebtoken")
exports.registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingTeacher = await teacherRepository.findTeacherByEmail(email);
    if (existingTeacher) {
      return res.status(400).json({ error: "Teacher already exists" });
    }

    const teacher = await teacherRepository.createTeacher({ name, email, password });

    // Generate token
    const token = jwt.sign({ id: teacher._id }, "the secret");
    console.log("Generated Token:", token); // Log the token for debugging

    res.status(201).json({ message: "Teacher registered successfully", teacher, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
