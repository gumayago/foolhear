//! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/db'); // importando o banco de dados para usar nas rotas

// ==================================================================================
// rota cliente:

// Rota específica para listar apenas os usuários administradores
router.get('/cliente', async (req, res) => {
    try {
        const [dados] = await db.query("SELECT * FROM cliente where adm = 1");
        res.json({ mensagem: "Lista de administradores:", dados }); // Objeto único
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//rota perfil do administrador:

router.get('/cliente/:id', async (req,res) =>{
    const id = req.params.id
   const [dados] = await db.query("SELECT * FROM cliente WHERE id = ?",[id])

    if (dados.legth === 0){
  return res.status(404).json({erro:"cliente não encontrado"})}
   else{ res.json(dados)}
})




router.post('/cliente', async (req,res) =>{
   const { nome, email, telefone, rua, numero, bairro, imagem, senha, adm} = req.body;
   await db.query("INSERT INTO cliente VALUES (?,?,?,?,?,?,?,?,?,?)",
    [id,nome,email, telefone, rua, numero, bairro, imagem, senha, adm],)
   res.status(201).json(req.body);
});

router.put('/cliente/:id', async (req,res) =>{
   const {nome, email, telefone, rua, numero, bairro, imagem, senha, adm} = req.body;
   await db.query("UPDATE cliente SET nome = ?, email=?, telefone=?, rua=?, numero=?, bairro=?, imagem=?, senha=?, adm=? WHERE id=?",
    [nome,email, telefone, rua, numero, bairro, imagem, senha, adm, req.params.id])
   res.status(201).json(req.body);
});

router.delete("/cliente/:id", async (req,res) =>{
   await db.query("DELETE FROM cliente WHERE id=?",[req.params.id])
   res.json({deleted: req.params.id});
});

// ... demais rotas seguindo a mesma lógica do res.json ...

module.exports = router; // Exporta o router