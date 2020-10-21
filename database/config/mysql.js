const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'overflow'
});

module.exports = connection;