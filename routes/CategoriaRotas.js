//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/db'); // importando o banco de dados para usar nas rotas

//==================================================================================
router.get('/categoria', async (req, res) => {
    const dados = await db.query( "SELECT * FROM categoria")
    console.log(dados)
    res.json(dados[0])
})

router.get('/categoria/:id', async (req,res) =>{
    const id = req.params.id
   const [dados] = await db.query("SELECT * FROM categoria WHERE id = ?",[id])

    if (dados.legth === 0){
  return res.status(404).json({erro:"categoria não encontrada"})}
   else{ res.json(dados)}
})


//  criar rota que busque todos as categorias
// add um planeta no bd
router.post('/categoria', async (req,res) =>{
   const {id, nome, img} = req.body;
   await db.query("INSERT INTO categoria VALUES (?,?,?)",
    [id,nome, img],)
   res.status(201).json(req.body);
});
   
router.put('/categoria/:id', async (req,res) =>{
   const {nome, img} = req.body;
   await db.query("UPDATE categoria SET nome = ?, img=? WHERE id=?",
    [nome,img,req.params.id])
   res.status(201).json(req.body);
});

router.delete("/categoria/:id", async (req,res) =>{
   await db.query("DELETE FROM categoria WHERE id=?",[req.params.id])
   res.json({deleted: req.params.id});
});
// aqui transferimos o indice "[0]" do objeto JSON para a VARIAVEL "dados" para otimizar e vc ""SEMPRE"" vai querer o indicde O que vem do banco, logo os dados da entidade q vc deseja.


module.exports = router;