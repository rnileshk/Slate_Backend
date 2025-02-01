const pool = require('../config/db');

class StudentAchievement {
  static async findByStudentId(studentId) {
    const { rows } = await pool.query(
      'SELECT * FROM student_achievements WHERE student_id = $1',
      [studentId]
    );
    return rows[0];
  }
}

module.exports = StudentAchievement;