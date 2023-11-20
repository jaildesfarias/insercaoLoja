
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Produto = db.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamanho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Produto;
