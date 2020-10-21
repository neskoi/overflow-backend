const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Digimons1285-',
  database: 'overflow'
});

module.exports = connection;