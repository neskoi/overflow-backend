const express =  require('express');
const router = express.Router();

const post_route = require('./posts.routes');

router.use(post_route);

module.exports = router;