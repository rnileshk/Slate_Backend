require('dotenv').config();

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || b8221fd9e7bd30dfb84b466f0419fc5bbb5aae45d69473fea26616f9351e6b5a,
  JWT_EXPIRES_IN: '24h'
};