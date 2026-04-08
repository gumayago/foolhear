//! Em vez de usar app.get(), você usará router.get(). 

//! routes/users.js
const express = require('express');
const router = express.Router(); // Cria um mini-router

// Rota específica (ex: /users/)
router.get('/', (req, res) => {
    res.send('Lista de usuários');
});

// Rota específica (ex: /users/perfil)
router.get('/perfil', (req, res) => {
    res.send('Perfil do usuário');
});

module.exports = router; // Exporta o router







// rota adm:
app.get('/adm', (req, res) => {
  res.send('<h1> perfil ADM: </h1>')
});

module.exports = router;