// exportar conversa do gemini CTR+A e CTRL+P para criar um PDF.
// Para o trabalho dividir os server's controller's, e as rotas. (para distrinchar corretamente)
// COMANDOS: npm init -y, npm install express --save, node + nome(index.js) e node --watch index.js

// requisitando a biblioteca do express (API) 
const express = require('express')
// chamando a biblioteca que instalamos do mysql
const mysql = require("mysql2/promisse")
const app = express()
const port = 3000
const cors = require('cors'); // Importante para o navegador aceitar a conexão
app.use(cors()); // Libera o acesso do seu HTML para o servidor
app.use(express.json()); //! Express USE objetos (json)! Faz o Express entender o JSON que o Fetch enviou
app.use(express.Router)
const router = express.Router(); // criando o roteador para organizar as rotas (separar as rotas do index.js, para deixar ele mais limpo e organizado), ou seja, aqui estamos criando um roteador para organizar as rotas do nosso servidor, para que possamos separar as rotas do index.js e deixar ele mais limpo e organizado. O roteador é uma forma de agrupar as rotas relacionadas, por exemplo, todas as rotas relacionadas aos usuários podem ficar em um arquivo separado, e todas as rotas relacionadas aos livros podem ficar em outro arquivo separado, e assim por diante. Isso ajuda a manter o código mais organizado e fácil de entender. Depois de criar o roteador, podemos exportá-lo e importá-lo no index.js para usar as rotas que criamos nele.

// chamando o banco de dados  
const db = mysql.createPool({
    host: "localhost",
    user:"hoot",
    password: "senacrs",
    database:"bd"
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})