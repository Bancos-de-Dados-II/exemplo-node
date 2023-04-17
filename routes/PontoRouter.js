var express = require('express');
var router = express.Router();

const PontoController = require('../controllers/PontoController');

router.get('/', PontoController.listarPontos);
router.get('/sincronizar', PontoController.sincronizar);
router.post('/', PontoController.salvarPonto);

module.exports = router;