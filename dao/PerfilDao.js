const db = require("../database/connection");

class PerfilDao {
  constructor(connection) {
    this.db = connection;
  }
  async listPerfil(id_usuario) {
    const perfil = await db('users').where('id', id_usuario).select('*');
    return perfil;
  }
}

module.exports = new PerfilDao(db);
