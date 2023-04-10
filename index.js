const express = require('express');
const app = express();
const port = 3001;

app.get('/usuarios', (req, res) => {
  res.send('Hello World!')
});
app.get('/usuarios/:id', (req, res) => {
  res.send('Hello World!')
});
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