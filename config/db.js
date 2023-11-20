// config/db.js
const { Sequelize } = require('sequelize');

const db = new Sequelize('loja', 'root', 'casa', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = db;
