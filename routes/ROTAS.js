// routes/index.js
const express = require('express');
const router = express.Router();

router.use('/users', require('./RotaUsuario'));
router.use('/adm', require('./RotaAdm'));
router.use('/login', require('./RotaLogin'));
router.use('/cadastro', require('./RotaCadastro'));
router.use('/home', require('./RotaHome'));

module.exports = router;