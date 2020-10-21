const express =  require('express');
const router = express.Router();

const post_route = require('./posts.routes');
const perfil_route = require('./perfil.routes');

    router  .use(post_route)
            .use(perfil_route)

module.exports = router;