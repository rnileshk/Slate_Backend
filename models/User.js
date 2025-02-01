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

  static async updateResetToken(email, token, expiry) {
    await pool.query(
      'UPDATE users SET reset_token = $1, reset_token_expiry = $2 WHERE email = $3',
      [token, expiry, email]
    );
  }

  static async findByResetToken(token) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE reset_token = $1 AND reset_token_expiry > NOW()',
      [token]
    );
    return rows[0];
  }

  static async resetPassword(userId, newPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query(
      'UPDATE users SET password = $1, reset_token = NULL, reset_token_expiry = NULL WHERE id = $2',
      [hashedPassword, userId]
    );
  }
}

module.exports = User;