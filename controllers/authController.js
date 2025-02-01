const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/jwt');

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password)) || user.role !== role) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, linkedStudentId: user.linked_student_id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};