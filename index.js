const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const usuarioRouter = require('./routes/UsuarioRouter');
const pontoRouter = require('./routes/PontoRouter');
const AnotacaoRouter = require('./routes/AnotacaoRouter');

const cors = require('cors');
app.use(cors());

app.use('/usuarios',usuarioRouter);
app.use('/pontos',pontoRouter);
app.use('/anotacoes', AnotacaoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});