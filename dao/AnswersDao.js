const db = require("../database/connection");

class AnswersDao {
  constructor(connection) {
    this.db = connection;
  }

  async list_answers(id_usuario) {
    const answers = await db("answers").where("id", id_usuario).select("*");
    return answers;
  }

  async new_answer(id_usuario, id_post, body) {
    const answer = await db("answers").insert({
      "fk_answers_users": id_usuario,
      "fk_answers_asks": id_post,
      "body": body
    });
    return answer;
  }
}

module.exports = new AnswersDao(db);