const Anotacao = require('../models/Anotacao');

const listarAnotacoes = async (req,res) => {
    Anotacao.find({},{_id:true, __v:false}).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

const buscarPorConteudo = async (req,res) =>{
    Anotacao.find({$text:{$search:req.params.conteudo}},{_id:true, __v:false}).then(result => {
        res.status(200).send(result);
    }).catch(e => res.status(400).send(e));
}

const salvarAnotacao = async (req,res) =>{
    Anotacao.create(req.body).then(result => {res.status(201).send(result)}).catch(e => res.status(400).send(e));
}

const deletarAnotacao = async (req,res) =>{
    Anotacao.deleteOne({_id:req.params.id}).then(result => {
        if(result.deletedCount > 0) res.status(200).send('Removido com sucesso');
        else res.status(404).send('Anotação não encontrada');
    }).catch(e => res.status(400).send(e));
}

const atualizarAnotacao = async (req,res) =>{
    const anotacao = await Anotacao.findById(req.params.id);
    if(anotacao){
        res.status(404).send('Anotação não encontrada');
    }else{
        anotacao.overwrite(req.body);
        await anotacao.save();
        res.status(200).send('Atualizado com sucesso')
    }
}

module.exports = {listarAnotacoes, salvarAnotacao, buscarPorConteudo, deletarAnotacao, atualizarAnotacao};