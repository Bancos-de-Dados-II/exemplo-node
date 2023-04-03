const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('aula', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

const Usuario = sequelize.define('Usuario', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nome: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

  sincronizar();

  async function sincronizar(){
    await Usuario.sync();
  }


// conectar();
// async function conectar(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }