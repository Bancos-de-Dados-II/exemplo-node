var express = require('express');
var router = express.Router();
const anotacaoController = require('../controllers/AnotacaoController');

router.get('/', anotacaoController.listarAnotacoes);
router.get('/conteudo=:texto', (req,res)=>console.log('ok'));
router.get('/:id', (req,res)=>console.log('ok'));
router.post('/', anotacaoController.salvarAnotacao);
router.delete('/:id', (req,res)=>console.log('ok'));
router.put('/:id', (req,res)=>console.log('ok'));

module.exports = router;