// config/db.js
const { Sequelize } = require('sequelize');

const db = new Sequelize('loja', 'root', 'ifpe2023', {
  host: 'localhost',
  dialect: 'mysql', 
});

module.exports = db;
