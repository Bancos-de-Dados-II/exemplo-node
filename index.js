const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const usuarioController = require('./controllers/UsuarioController');

app.get('/usuarios', usuarioController.listarUsuarios);
app.get('/usuarios/:id', usuarioController.buscarPelaChave);
app.post('/usuarios', usuarioController.salvarUsuario);
app.delete('/usuarios/:id', usuarioController.deletarUsuario);
app.put('/usuarios/:id', usuarioController.atualizarUsuario);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});