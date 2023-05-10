const Usuario = require('../models/Usuario');
const client = require('../database/redis');

const listarUsuarios = async (req,res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).send(usuarios);
}

const buscarPelaChave = async (req,res) =>{

    const retorno = await client.get(req.params.id);

    if(retorno){
        console.log('Está no Redis');
        res.send(JSON.parse(retorno));
    }else{
        console.log('Não está no redis');
        const usuario = await Usuario.findByPk(req.params.id);
        if(usuario == null){
            res.status(404).send('Usuário não encontrado');
        }else{
            await client.set(usuario.id, JSON.stringify(usuario),{
                EX: 3600
            });
            res.status(200).send(usuario);
        }
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

const deletarUsuario = async (req,res) =>{
    const usuario = await Usuario.findByPk(req.params.id);
    if(usuario == null){
        res.status(404).send('Usuário não encontrado');
    }else{
        await usuario.destroy();
        res.status(200).send(`Usuário ${req.params.id} excluído`);
    }
}

const atualizarUsuario = async (req,res) =>{
    const usuario = await Usuario.findByPk(req.params.id);
    if(usuario == null){
        res.status(404).send('Usuário não encontrado');
    }else{
        usuario.set(req.body);
        await usuario.save();
        res.status(200).send('Atualizado')
    }
}

const sincronizar = async (req,res) =>{
    await Usuario.sync();
    res.status(200).send('Sincronizado');
}

module.exports = {listarUsuarios, buscarPelaChave, salvarUsuario, deletarUsuario, atualizarUsuario, sincronizar};