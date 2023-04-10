const Usuario = require('../models/Usuario');

const listarUsuarios = async (req,res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).send(usuarios);
}

const buscarPelaChave = async (req,res) =>{
    const usuario = await Usuario.findByPk(req.params.id);
    if(usuario == null){
        res.status(404).send('Usuário não encontrado');
    }else{
        res.status(200).send(usuario);
    }
}

module.exports = {listarUsuarios, buscarPelaChave};