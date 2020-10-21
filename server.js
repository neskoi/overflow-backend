const app = require('./app');
require('dotenv');
const port = process.env.port || 3000; 

require('./database/connection');
app.listen(port,()=>{
  console.log('Servidor rodando na porta: ' + port);
});