// Carrega variáveis do .env
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar JSON
app.use(express.json());

// Rota de teste (temporária)
app.get('/', (req, res) => {
  res.send('API do Tasker rodando!');
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
