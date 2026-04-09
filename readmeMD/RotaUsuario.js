// routers/usuario.js
const express = require('express');
const router = express.Router(); // Cria a instância do roteador



//! Rota para LISTAR TODOS OS USUARIOS:
router.get('/usuarios', async (req, res) => {
      const [dados] = await db.query("SELECT * FROM usuario");
  res.json({ mensagem: "Lista de usuários:" }, dados);
});


//! cria uma rota que busque 1 usuario expecifico. //rota p/ MOSTRAR usuario id: 
router.get('/usuario/:id', async (req, res) => {
    const id = req.params.id
    const [dados] = await db.query("SELECT * FROM usuario WHERE id = ?", [id])
    //const [dados] = await db.query("SELECT * FROM usuario WHERE id = ?", [req.params.id]);
    res.json({ mensagem: "Perfil do usuário" }, dados);
})


//! rota CRIAR usuario id:
router.post('/usuario', async (req, res) => {
  const { id, nome, email, senha } = req.body;
  await db.query("INSERT INTO usuario VALUES (?, ?, ?, ?)", [id, nome, email, senha]);
  
  res.status(201).json({ mensagem: "Usuário criado" });
});

// rota EDITAR/UPDATE usuario id:
router.put('/usuario/:id', async (req, res) => {
  const { id, nome, email, senha } = req.body;
  await db.query("UPDATE usuario SET nome=?, email=?, senha=? WHERE id=?", [nome, email, senha, id]);
  res.status(200).json({ mensagem: "Perfil do usuário atualizado" });
});

// rota DELETAR usuario id: AQUI A IDEIA É QUE APENAS O ADM POSSA DELETAR/TORNAR INATIVO
router.delete('/usuario', (req, res) => {
  res.json({ mensagem: "Perfil do usuário deletado" });
});


app.post('/pilotos', async (req, res) =>{
  const {id, nome, patente } = req.body;

  await db.query("INSERT INTO piloto VALUES (?, ?, ?)", [id, nome, patente]);
  res.status(201).json(req.body);

} );

app.put('/pilotos/:id', async (req, res) =>{
  const {id, nome, patente } = req.body;
  await db.query("UPDATE piloto SET nome=?, patente=? WHERE id=?", [id, nome, patente]);
  res.status(201).json({id: req.params.id, nome, patente});
} );







// Exporta o roteador para ser usado em outros arquivos
module.exports = router;

/*
como tornar o miro num pdf

aprendendo sobre o fetch api

como criar a rota usuario na pasta routers e exportar para o index.js

como importar uma rota para o arquivo principal, tipo irei separar as rotas e chamar elas no arquivo principal e esse responsavel pela aplicação toda, seria quase que um react barato, mais para eu ter controle e ver onde cada coisa da aplicação esta acontecendo e pdoer reparar em vez de tudo em um unico arquivo

preciso de uma função que mostre os usuarios, tipo eu vou chamar a rota get usuarios para mostrar todos e quero uma função pra criar o card deles com nome e tudo mais no html (front-end) e que a mesma se atualize pra quando for cadastrado um novo usuario, tipo antes tinha 3 ao ser add ela crie um novo card para o 4 e mostre

extensoes para mudar icones do vs code 
*/