const Ponto = require('../models/Ponto');

const listarPontos = async (req,res) => {
    const Pontos = await Ponto.findAll();
    res.status(200).send(Pontos);
}

const salvarPonto = async (req,res) =>{
    try{
        const Ponto = await Ponto.create(req.body);
        if(Ponto!=null){
            res.status(201).send('Usuário criado')
        }
    }catch{
        res.status(400).send('Falha ao Salvar');
    }    
}

const sincronizar = async (req,res) =>{
    await Ponto.sync();
    res.status(200).send('Sincronizado');
}

module.exports = {listarPontos, salvarPonto, sincronizar};