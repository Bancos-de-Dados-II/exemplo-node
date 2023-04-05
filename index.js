const Usuario = require('./models/Usuario');

salvar({
    nome:"Maria",
    email:"maria@gmail.com"
  });

  async function salvar(obj){
    const usuario = Usuario.build(obj);
    await usuario.save();
  }

  // sincronizar();

  // async function sincronizar(){
  //   await Usuario.sync();
  // }

// conectar();
// async function conectar(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }