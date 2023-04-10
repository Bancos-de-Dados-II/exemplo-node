const Usuario = require('../models/Usuario');

const listarUsuarios = async (req,res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).send(usuarios);
}

module.exports = {listarUsuarios};