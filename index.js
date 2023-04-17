const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const usuarioRouter = require('./routes/UsuarioRouter');
const pontoRouter = require('./routes/PontoRouter');

app.use('/usuarios',usuarioRouter);
app.use('/pontos',pontoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});