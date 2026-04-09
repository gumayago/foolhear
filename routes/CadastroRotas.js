//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

// ==================================================================================
// rota cadastro:
app.get('/cadastro', (req, res) => {
  res.send('<h1> Cadastro: </h1>')
});

//  criar rota que busque todos os cadastros
app.get('/cadastro', async (req, res) => {
    const [dados] = await db.query("SELECT * FROM cadastro")
    res.json(dados)
    // aqui transferimos o indice "[0]" do objeto JSON para a VARIAVEL "dados" para otimizar e vc ""SEMPRE"" vai querer o indicde O que vem do banco, logo os dados da entidade q vc deseja.
})