const Teacher = require("../models/Teacher");

class TeacherRepository {
  async createTeacher(data) {
    return await Teacher.create(data);
  }

  async findTeacherByEmail(email) {
    return await Teacher.findOne({ email });
  }
}

module.exports = new TeacherRepository();
