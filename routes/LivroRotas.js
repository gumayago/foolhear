//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

//==================================================================================
// tentando implementar a logica de controle, chamando uma var externa a rota
const x = ("Mensagem externa");

// rota MOSTRAR livro id:
router.get('/livro', (req, res) => {
  res.json('<h1> livro: </h1> ')
});

router.get('/livro', async (req, res) => {
    const dados = await db.query( "SELECT * FROM livro")
    console.log(dados, )
    res.json(dados[0])
})

router.get('/livro/:id', async (req,res) =>{
    const id = req.params.id
   const [dados] = await db.query("SELECT * FROM livro WHERE id = ?",[id])

    if (dados.legth === 0){
  return res.status(404).json({erro:"livro não encontrada"})}
   else{ res.json(dados)}
})
// rota CRIAR livro id:
router.post('/livro/:id', async (req,res) =>{
   const {id,nome, descricao, categoria_id, img, autor_id, estoque_id} = req.body;
   await db.query("INSERT INTO livro VALUES (?,?,?)",
    [id,nome, descricao, categoria_id, img, autor_id, estoque_id],)
   res.status(201).json(req.body);
});


// rota EDITAR/UPDATE livros id:
router.put('/livro/:id', async (req,res) =>{
   const {nome, descricao, categoria_id, img, autor_id, estoque_id} = req.body;
   await db.query("UPDATE livro SET nome = ?, img=? WHERE id=?",
    [nome, descricao, categoria_id, img, autor_id, estoque_id])
   res.status(201).json(req.body);
});

// rota DELETAR livros id:
router.delete("/livro/:id", async (req,res) =>{
   await db.query("DELETE FROM livro WHERE id=?",[req.params.id])
   res.json({deleted: req.params.id});
});



module.exports = router;
