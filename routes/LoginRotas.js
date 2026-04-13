//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

//==================================================================================
// rota login:


router.get('/login:email', async (req, res) => {
    try {
        const [dados] = await db.query("SELECT senha FROM cliente where email = ?", [req.params.id]);
        if (email==email && senha == senha) {
    alert("email correto, acesso liberado!");
    carregarCategoriasSelect();
  } else {
    alert("email ou senha incorreta, acesso negado!");
  };
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;


  if (response.ok) {
    alert("Categoria cadastrada!");
    e.currentTarget.reset();
    carregarCategoriasSelect();
  } else {
    alert("Erro ao cadastrar categoria.");
  };