const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Práctica Ansible CI/CD funcionando!');
});

app.listen(port, () => {
  console.log(`App en puerto ${port}`);
});
