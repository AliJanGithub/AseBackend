const Student = require("../models/Student");

class StudentRepository {
  async createStudent(data) {
    return await Student.create(data);
  }

  async findStudentsByTeacher(teacherId) {
    return await Student.find({ teacherId });
  }
}

module.exports = new StudentRepository();
