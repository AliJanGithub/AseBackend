const attendanceRepository = require("../repositories/attendanceRepository");

exports.markAttendance = async (req, res) => {
  try {
    const { date, studentId, status } = req.body;
    const teacherId = req.user.id; // Extract teacherId from token

    const attendance = await attendanceRepository.markAttendance({
      date,
     teacherId,
      studentId,
      status,
    });

    res.status(201).json({ message: "Attendance marked successfully", attendance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAttendanceByTeacher = async (req, res) => {
  try {
    
    const teacherId = req.user.id;
    const attendance = await attendanceRepository.getAttendanceByTeacher(teacherId);
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
