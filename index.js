const express = require('express');
const app = express();
const port = 3001;
const usuarioController = require('./controllers/UsuarioController');

app.get('/usuarios', usuarioController.listarUsuarios);
app.get('/usuarios/:id', usuarioController.buscarPelaChave);
app.post('/usuarios', (req, res) => {
  res.send('Hello World!')
});
app.delete('/usuarios/:id', (req, res) => {
  res.send('Hello World!')
});
app.put('/usuarios/:id', (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});