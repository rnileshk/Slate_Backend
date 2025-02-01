const StudentAchievement = require('../models/StudentAchievement');

exports.getAchievements = async (req, res) => {
  try {
    const { student_id } = req.params;
    const user = req.user;

    // Authorization check
    if (user.role === 'Parent' || user.role === 'Student') {
      if (user.linkedStudentId !== parseInt(student_id)) {
        return res.status(403).json({ error: 'Access denied' });
      }
    }

    const achievements = await StudentAchievement.findByStudentId(student_id);
    
    if (!achievements) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(achievements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};