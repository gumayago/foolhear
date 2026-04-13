//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

//==================================================================================
// rota categoria:
app.get('/categoria', (req, res) => {
  res.send('<h1> Categorias: </h1> ')
});


// SELECT * FROM piloto;
app.get('/categoria', async (req, res) => {
    const dados = await db.query( "SELECT * FROM piloto")
    console.log(dados, )
    res.json(dados[0])
})

//  criar rota que busque todos as categorias
// add um planeta no bd
app.get('/planeta', async (req, res) => {
    const [dados] = await db.query("SELECT * FROM planeta")
    res.json(dados)
    // aqui transferimos o indice "[0]" do objeto JSON para a VARIAVEL "dados" para otimizar e vc ""SEMPRE"" vai querer o indicde O que vem do banco, logo os dados da entidade q vc deseja.
})

module.exports = router;