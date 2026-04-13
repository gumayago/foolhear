'   //! Em vez de usar app.get(), você usará router.get(). 

const express = require('express');
const router = express.Router();
const db = require('../data/bd'); // importando o banco de dados para usar nas rotas

// ==================================================================================
// rota usuario:

// rota cliente:

// Rota específica para listar apenas os usuários administradores
router.get('/cliente', async (req, res) => {
    try {
        const [dados] = await db.query("SELECT * FROM usuario where adm = 1");
        res.json({ mensagem: "Lista de administradores:", dados }); // Objeto único
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

//rota perfil do administrador:

router.get('/cliente/:id', async (req,res) =>{
    const id = req.params.id
   const [dados] = await db.query("SELECT * FROM adm WHERE id = ?",[id])

    if (dados.legth === 0){
  return res.status(404).json({erro:"piloto não encontrado"})}
   else{ res.json(dados)}
})




router.post('/cliente/:id', async (req,res) =>{
   const {id , nome, email, telefone, rua, numero, bairro, imagem, senha, adm} = req.body;
   await db.query("INSERT INTO adm VALUES (?,?,?)",
    [id,nome,email, telefone, rua, numero, bairro, imagem, senha, adm],)
   res.status(201).json(req.body);
});

router.put('/cliente/:id', async (req,res) =>{
   const {nome, email, telefone, rua, numero, bairro, imagem, senha, adm} = req.body;
   await db.query("UPDATE adm SET nome = ?, email=?, telefone=?, rua=?, numero=?, bairro=?, imagem=?, senha=?, adm=? WHERE id=?",
    [nome,email, telefone, rua, numero, bairro, imagem, senha, adm, req.params.id])
   res.status(201).json(req.body);
});

router.delete("/cliente/:id", async (req,res) =>{
   await db.query("DELETE FROM adm WHERE id=?",[req.params.id])
   res.json({deleted: req.params.id});
});

// ... demais rotas seguindo a mesma lógica do res.json ...

module.exports = router; // Exporta o router

//a rota usuario e a rota de cadastro são a mesma? 
// pois se der get usuarios irá mostrar todos, usuario.id (x) irá mostra o usuario onde id = x, post usuario, vai criar usuario, put é para o usuario editar, e o delete é para deletar.
// sendo que o usuario, vai ter permisão apenas de ver o usuario (x), no caso ele mesmo, criar um perfil no caso o dele, e o Update editar o perfil, 
// já as rotas de delete e get/SELECT * FROM usuarios serão rotas do adm 