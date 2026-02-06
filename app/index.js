const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola desde Node desplegado con Ansible y GitHub Actions');
});

app.listen(port, () => {
  console.log(`App escuchando en puerto ${port}`);
});
