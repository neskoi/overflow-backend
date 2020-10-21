const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController')

router.get('/posts', PostsController.index);
router.get('/posts/:id', PostsController.details);
router.post('/posts', PostsController.new_post);


module.exports = router;