const sequelize = require('../database/db');
const {DataTypes} = require('sequelize');

const Ponto = sequelize.define('Ponto', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING
    },
    geometria: {
      type: DataTypes.GEOMETRY
    }
  }, {
    // Other model options go here
  });

module.exports = Ponto;