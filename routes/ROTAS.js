// routes/index.js
const express = require('express');
const router = express.Router();



router.use('/cadastro', require('./CadastroRotas'));
router.use('/categoria', require('./CategoriaRotas'));
router.use('/livros', require('./LivroRotas'));
router.use('/login', require('./LoginRotas'));
<<<<<<< Updated upstream
router.use('/usuario', require('./UsuarioRotas'));
=======
router.use('/usuario', require('./clienteRotas'))
>>>>>>> Stashed changes



module.exports = router;