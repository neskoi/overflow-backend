const express = require('express');
const router = express.Router();

const PerfilController = require('../controllers/PerfilController')

router.get('/perfil/:id', PerfilController.index);

module.exports = router;