//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../db'); // importando o banco de dados para usar nas rotas

// ==================================================================================
// rota adm:

// Rota específica para listar apenas os usuários administradores
router.get('/usuarios', async (req, res) => {
    try {
        const [dados] = await db.query("SELECT * FROM usuario where adm = 1");
        res.json({ mensagem: "Lista de administradores:", dados }); // Objeto único
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//rota perfil do administrador:
router.get('/adm/:id', (req, res) => {
    res.send('Perfil do administrador');
});

// ... demais rotas seguindo a mesma lógica do res.json ...

module.exports = router; // Exporta o router








