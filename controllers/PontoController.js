const Ponto = require('../models/Ponto');

const listarPontos = async (req,res) => {
    const Pontos = await Ponto.findAll();
    res.status(200).send(Pontos);
}

const salvarPonto = async (req,res) =>{
    try{
        const obj = {
            descricao: req.body.descricao,
            geometria: { 
                type: 'Point', 
                coordinates: [req.body.lng, req.body.lat]
            }
        }

        const ponto = await Ponto.create(obj);
        if(ponto!=null){
            res.status(201).send('Usuário criado')
        }
    }catch(e){
        console.log(e);
        res.status(400).send('Falha ao Salvar');
    }    
}

const sincronizar = async (req,res) =>{
    await Ponto.sync();
    res.status(200).send('Sincronizado');
}

module.exports = {listarPontos, salvarPonto, sincronizar};