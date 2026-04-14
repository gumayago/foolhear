const express = require('express');
const router = express.Router();
const db = require('../data/db');

// Usamos POST para login porque a senha não deve aparecer na URL
router.post('/login', async (req, res) => {
    // Pegamos o email e a senha enviados pelo formulário (corpo da requisição)
    const { email, senha } = req.body;

    try {
        // 1. Buscamos o usuário pelo e-mail
        const [usuarios] = await db.query("SELECT * FROM cliente WHERE email = ?", [email]);

        // 2. Verificamos se o usuário existe
        if (usuarios.length === 0) {
            return res.status(401).json({ mensagem: "E-mail ou senha incorretos!" });
        }

        const usuario = usuarios[0];

        // 3. Comparamos a senha enviada com a senha do Banco de Dados
        // (Nota: Em produção, use bcrypt para comparar senhas criptografadas)
        if (senha === usuario.senha) {
            // Login com sucesso
            res.json({ 
                mensagem: "Login realizado com sucesso!",
                usuario: { id: usuario.id, nome: usuario.nome } 
            });
        } else {
            // Senha errada
            res.status(401).json({ mensagem: "E-mail ou senha incorretos!" });
        }

    } catch (err) {
        res.status(500).json({ erro: "Erro no servidor ao tentar logar." });
    }
});

module.exports = router;