const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.get('/achievements/:student_id',
  authMiddleware,
  roleMiddleware(['Parent', 'Student']),
  studentController.getAchievements
);

module.exports = router;