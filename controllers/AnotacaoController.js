const Anotacao = require('../models/Anotacao');

const listarAnotacoes = async (req,res) => {
    Anotacao.find().then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

// const buscarPelaChave = async (req,res) =>{

//     const retorno = await client.get(req.params.id);

//     if(retorno){
//         console.log('Está no Redis');
//         res.send(JSON.parse(retorno));
//     }else{
//         console.log('Não está no redis');
//         const usuario = await Usuario.findByPk(req.params.id);
//         if(usuario == null){
//             res.status(404).send('Usuário não encontrado');
//         }else{
//             await client.set(usuario.id, JSON.stringify(usuario),{
//                 EX: 3600
//             });
//             res.status(200).send(usuario);
//         }
//     }

    
// }

const salvarAnotacao = async (req,res) =>{
    Anotacao.create(req.body).then(result => res.send(result));
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

module.exports = {listarAnotacoes, salvarAnotacao};