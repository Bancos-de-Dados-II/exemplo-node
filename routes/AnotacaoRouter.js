var express = require('express');
var router = express.Router();
const anotacaoController = require('../controllers/AnotacaoController');

router.get('/', anotacaoController.listarAnotacoes);
router.get('/:conteudo', anotacaoController.buscarPorConteudo);
router.post('/', anotacaoController.salvarAnotacao);
router.delete('/:id', anotacaoController.deletarAnotacao);
router.put('/:id', anotacaoController.atualizarAnotacao);

module.exports = router;