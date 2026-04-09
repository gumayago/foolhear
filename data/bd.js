// chamando a biblioteca que instalamos do mysql
const mysql = require("mysql2/promise");

// chamando o banco de dados:
const db = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: "senacrs",
    database: "folhear"
});

module.exports = db;