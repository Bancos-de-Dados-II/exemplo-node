const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aula', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;