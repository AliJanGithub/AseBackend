const Attendance = require("../models/Attendance");

class AttendanceRepository {
  async markAttendance(data) {
    return await Attendance.create(data);
  }

  async getAttendanceByTeacher(teacherId) {
    return await Attendance.find({ teacherId }).populate("studentId");
  }
}

module.exports = new AttendanceRepository();
