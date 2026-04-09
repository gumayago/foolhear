//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../db'); // importando o banco de dados para usar nas rotas

// ==================================================================================
// rota usuario:

router.get('/usuarios', async (req, res) => {
    try {
        const [dados] = await db.query("SELECT * FROM usuario");
        res.json({ mensagem: "Lista de usuários:", dados }); // Objeto único
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

// ... demais rotas seguindo a mesma lógica do res.json ...

module.exports = router;

//a rota usuario e a rota de cadastro são a mesma? 
// pois se der get usuarios irá mostrar todos, usuario.id (x) irá mostra o usuario onde id = x, post usuario, vai criar usuario, put é para o usuario editar, e o delete é para deletar.
// sendo que o usuario, vai ter permisão apenas de ver o usuario (x), no caso ele mesmo, criar um perfil no caso o dele, e o Update editar o perfil, 
// já as rotas de delete e get/SELECT * FROM usuarios serão rotas do adm 