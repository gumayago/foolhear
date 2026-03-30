// Para o trabalho dividir os server's controller's, e as rotas. (para distrinchar corretamente)
// COMANDOS: npm init -y, npm install express --save, node + nome(index.js) e node --watch index.js

const express = require('express');
const app = express();
const port = 3000;
const x = ("Mensagem externa");

// rota home
app.get('/', (req, res) => {
       // --- ESTE É O SEU "ALERT" ---
    console.log('✅ A rota principal foi acessada!');                
    // -----------------------------
    res.send('API Funcionando: HOME');
});

// rota cadastro:
app.get('/cadastro', (req, res) => {
  res.send('<h1> Cadastro: </h1>')
});

// rota login:
app.get('/login', (req, res) => {
  res.send('<h1> Login: </h1>')
});

// rota user:
app.get('/usuario', (req, res) => {
  res.send('<h1> perfil </h1>')
});

// rota adm:
app.get('/adm', (req, res) => {
  res.send('<h1> perfil ADM: </h1>')
});

// rota categorias:
app.get('/categoria', (req, res) => {
  res.send('<h1> Categorias: </h1> ')
});

// rota produtos/livros:
app.get('/produto', (req, res) => {
  res.send('<h1> Produtos arrray: </h1> ')
});

// rota livro id:
app.get('/livro', (req, res) => {
  res.send('<h1> produto:id </h1>');
  res.send(x);
});

// rota CRIAR livro id:
app.post('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

app.put('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

app.delete('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

// alert;
app.get('/1', (req, res) => {
    // --- ESTE É O SEU "ALERT" ---
    console.log('✅ A rota principal foi acessada!');                
    // -----------------------------
    res.send('API Funcionando!');
});












app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})