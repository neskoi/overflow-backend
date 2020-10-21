const db = require("../database/connection");

class PerfilDao {
  constructor(connection) {
    this.db = connection;
  }
  async listPerfil(id_usuario) {
    const perfil = await db('users').where('id', id_usuario).select('*')

    for(const asks of perfil){
        const total_asks = await db('asks').where('fk_asks_users', id_usuario).select('*')
        asks['posts'] = total_asks;
    }

    for(const answers of perfil){
        const total_answers = await db('answers').where('fk_answers_users', id_usuario).select('*')
        answers['answers'] = total_answers;
    }

    return perfil;
  }
}

module.exports = new PerfilDao(db);
