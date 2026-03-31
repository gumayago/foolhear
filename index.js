// exportar conversa do gemini CTR+A e CTRL+P para criar um PDF.
// Para o trabalho dividir os server's controller's, e as rotas. (para distrinchar corretamente)
// COMANDOS: npm init -y, npm install express --save, node + nome(index.js) e node --watch index.js

// requisitando a biblioteca do express (API) 
const express = require('express')
// chamando a biblioteca que instalamos do mysql
const mysql = require("mysql2/promisse")
const app = express()
const port = 3000
// Express USE objetos (json) 
app.use(express.json())

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