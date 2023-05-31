const Anotacao = require('../models/Anotacao');

const listarAnotacoes = async (req,res) => {
    Anotacao.find({},{_id:false, __v:false}).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

const buscarPorConteudo = async (req,res) =>{
    Anotacao.find({$text:{$search:req.params.conteudo}},{_id:false, __v:false}).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

const salvarAnotacao = async (req,res) =>{
    Anotacao.create(req.body).then(result => res.status(200).send(result)).catch(e => res.status(400).send(e));
}

// const deletarUsuario = async (req,res) =>{
//     const usuario = await Usuario.findByPk(req.params.id);
//     if(usuario == null){
//         res.status(404).send('Usuário não encontrado');
//     }else{
//         await usuario.destroy();
//         res.status(200).send(`Usuário ${req.params.id} excluído`);
//     }
// }

// const atualizarUsuario = async (req,res) =>{
//     const usuario = await Usuario.findByPk(req.params.id);
//     if(usuario == null){
//         res.status(404).send('Usuário não encontrado');
//     }else{
//         usuario.set(req.body);
//         await usuario.save();
//         res.status(200).send('Atualizado')
//     }
// }

// const sincronizar = async (req,res) =>{
//     await Usuario.sync();
//     res.status(200).send('Sincronizado');
// }

module.exports = {listarAnotacoes, salvarAnotacao, buscarPorConteudo};