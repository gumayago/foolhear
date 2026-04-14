// routes/index.js
const express = require('express');
const router = express.Router();



router.use('/cadastro', require('./CadastroRotas'));
router.use('/categoria', require('./CategoriaRotas'));
router.use('/livros', require('./LivroRotas'));
router.use('/login', require('./LoginRotas'));
router.use('/usuario', require('./UsuarioRotas'))



module.exports = router;