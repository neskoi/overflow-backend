const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController')

router.get('/posts', PostsController.index);

module.exports = router;