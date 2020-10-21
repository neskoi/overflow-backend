const knex = require('knex')
//config query
    //const db = require('./config/mysql')
    const config = require('./config/knexfile');
    
const db = knex(config.localconnection);
module.exports = db;