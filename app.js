require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// Routes
app.use('/auth', authRoutes);

const studentRoutes = require('./routes/studentRoutes');
app.use('/student', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});