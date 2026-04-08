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
const router = express.Router(); // criando o roteador para organizar as rotas do servidor

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

app.use('/api', require('./routes/RotaUsuario')); // Centralizado, usando o index.js para organizar as rotas








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})