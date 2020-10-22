const express = require('express');
const routes =  require('./routes/index');
const cors = require('cors');
const bodyparser = require('body-parser');

class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }
  
  middlewares(){
    this.server.use(bodyparser.json());
    this.server.use(bodyparser.urlencoded({ limit: '50mb', extended: true}));
    this.server.use(cors({
      "origin": "*",
      "exposedHeaders": ['Authorization', 'X-Total-Count'], 
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
  }));   
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;