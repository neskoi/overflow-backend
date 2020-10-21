const express = require('express');
const router = express.Router();

const AnswersController = require('../controllers/AnswersController')

router.get('/respostas/:id', AnswersController.index);
router.post('/respostas/:id_post', AnswersController.new_answer);

module.exports = router;