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

const salvarUsuario = async (req,res) =>{
    try{
        const usuario = await Usuario.create(req.body);
        if(usuario!=null){
            res.status(201).send('Usuário criado')
        }
    }catch{
        res.status(400).send('Falha ao Salvar');
    }    
}

module.exports = {listarUsuarios, buscarPelaChave, salvarUsuario};