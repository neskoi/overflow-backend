const express = require("express");
const router = express.Router();

const post_route = require("./posts.routes");
const perfil_route = require("./perfil.routes");
const ask_route = require("./asks.routes");
const answer_route = require("./answers.routes")

router.use(post_route)
      .use(perfil_route)
      .use(ask_route)
      .use(answer_route)

module.exports = router;
