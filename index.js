// COMANDOS: npm init -y, npm install express --save, node + nome(index.js) e node --watch index.js

const express = require('express'); // requisitando a biblioteca do express (API) 
const cors = require('cors'); // Importante para o navegador aceitar a conexão
const app = express(); 
const port = 3000

app.use(cors()); // Libera o acesso do seu HTML para o servidor
app.use(express.json()); // Faz o Express entender o JSON que o Fetch enviou
app.use(express.Router()); // Roteador para organizar as rotas do servidor


// Importa as rotas
const usuarioRotas = require('./routes/UsuarioRotas');

// Aplica as rotas com o prefixo /api
app.use('/api', usuarioRotas);
//app.use('/api', require('./routes/RotaUsuario')); 





// rota inicial
app.get('/', (req, res)=> {
       // --- ESTE É O SEU "ALERT" ---
    console.log('✅ A rota principal foi acessada!');                
    res.json({ mensagem: 'API Funcionando: HOME' });
});


//app.listen(3000, () => console.log("Servidor ON"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//! duvidas !
/*
sqlDELIMITER //


CREATE TRIGGER tg_atualiza_status_livro 
AFTER UPDATE ON Estoque 
FOR EACH ROW
BEGIN
    -- Se a quantidade chegar a 0, muda o status para 'indisponivel'
    IF NEW.quantidade = 0 THEN
        UPDATE Livros 
        SET status = 'indisponivel' 
        WHERE id_livro = NEW.id_livro;
    
    -- Se a quantidade for maior que 0 (ex: reposição), volta para 'disponivel'
    ELSEIF NEW.quantidade > 0 THEN
        UPDATE Livros 
        SET status = 'disponivel' 
        WHERE id_livro = NEW.id_livro;
    END IF;
END; //

DELIMITER ;
como deixar o adm fazer crud e os demais usuarios acessarem apenas o get, tipo dar permissao apenas para aguns 
*/