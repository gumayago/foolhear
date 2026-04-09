//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

//==================================================================================
// rota login:


router.get('/login', (req, res) => {
  res.send('<h1> Login: </h1>')
});

module.exports = router;
