//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../db'); // importando o banco de dados para usar nas rotas

//==================================================================================
// tentando implementar a logica de controle, chamando uma var externa a rota
const x = ("Mensagem externa");

// rota MOSTRAR livro id:
router.get('/livro', (req, res) => {
  res.send('<h1> produto:id </h1>');
  res.send(x);
});

// rota CRIAR livro id:
router.post('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

// rota EDITAR/UPDATE livros id:
router.put('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});

// rota DELETAR livros id:
router.delete('/livro', (req, res) => {
  res.send('<h1> criar livro </h1>');
  res.send(x);
});
