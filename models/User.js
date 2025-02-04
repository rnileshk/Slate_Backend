const pool = require('../config/db');
const bcrypt = require('bcrypt');

class User {
  static async findByEmail(email) {
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return rows[0];
  }

  static async create(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const { rows } = await pool.query(
      'INSERT INTO users (name, email, password, role, linked_student_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user.name, user.email, hashedPassword, user.role, user.linked_student_id]
    );
    return rows[0];
  }
}

module.exports = User;
