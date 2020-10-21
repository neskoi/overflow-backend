const express = require('express');
const router = express.Router();

const AsksController = require('../controllers/AsksController')

router.get('/perguntas/:id', AsksController.index);

module.exports = router;