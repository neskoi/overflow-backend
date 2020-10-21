const express = require('express');
const router = express.Router();

const PerfilController = require('../controllers/PerfilController')

router.post('/perfil/:id', PerfilController.index);

module.exports = router;