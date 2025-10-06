const express = require('express');
const bruxoRoutes = require('./src/routes/bruxoRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🏰 API de Hogwarts - MVC Edition',
    endpoints: {
      listar: 'GET /bruxos',
      buscar: 'GET /bruxos/:id',
      criar: 'POST /bruxos',
      atualizar: 'PUT /bruxos/:id',
      deletar: 'DELETE /bruxos/:id'
    }
  });
});

app.use('/bruxos', bruxoRoutes);

app.listen(PORT, () => {
  console.log(`🪄 API em http://localhost:${PORT}`);
});