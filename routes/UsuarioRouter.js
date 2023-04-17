var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/UsuarioController');

router.get('/', usuarioController.listarUsuarios);
router.get('/sincronizar', usuarioController.sincronizar);
router.get('/:id', usuarioController.buscarPelaChave);
router.post('/', usuarioController.salvarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);
router.put('/:id', usuarioController.atualizarUsuario);

module.exports = router;