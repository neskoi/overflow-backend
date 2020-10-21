const db = require("../database/connection");

class PostsDao {
  constructor(connection) {
    this.db = connection;
  }

  async list_posts() {
    const posts = await db("asks").select("*");

    
    return posts;
  }

  async list_details(id_post) {
    const post = await db("asks").where("id", id_post).select("*");

    for (const answers of post) {
      const total_answers = await db("answers")
        .where("fk_answers_asks", id_post)
        .select("*");
      answers["answers"] = total_answers;
    } 

    return post;
  }

  async new_post(title_post, body_post, id_usuario){
    const post = await db('asks').insert({
      "title": title_post,
      "body": body_post,
      "fk_asks_users": id_usuario
    })
    return post;
  }
}

module.exports = new PostsDao(db);
