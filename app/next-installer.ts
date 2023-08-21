import express from 'express' ;
const app = express();
const port = 3000;

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Olá, Mundo!');
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
