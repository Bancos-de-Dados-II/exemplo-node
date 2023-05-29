var express = require('express');
var router = express.Router();

router.get('/', (req,res)=>console.log('ok'));
router.get('/conteudo=:texto', (req,res)=>console.log('ok'));
router.get('/:id', (req,res)=>console.log('ok'));
router.post('/', (req,res)=>console.log('ok'));
router.delete('/:id', (req,res)=>console.log('ok'));
router.put('/:id', (req,res)=>console.log('ok'));

module.exports = router;