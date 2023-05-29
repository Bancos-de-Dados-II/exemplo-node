const mongoose = require('../database/mongo');

const anotacaoSchema = new mongoose.Schema({
    autor: String,
    data: { type: Date, default: Date.now },
    titulo: String,
    conteudo: String  
  },{collection: 'anotacoes'});
  
  anotacaoSchema.index({titulo:'text', conteudo:'text'},{default_language:'pt', weights:{titulo:2, conteudo:1}});
  
  const Anotacao = mongoose.model('Anotacao', anotacaoSchema);

  module.exports = Anotacao;