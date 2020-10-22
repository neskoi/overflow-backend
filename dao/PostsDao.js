const db = require("../database/connection");

class PostsDao {
  constructor(connection) {
    this.db = connection;
  }

  async list_posts() {
    const posts = await db("asks").select("*");
    for(const users of posts) {
      const user_of_post = await db("users").where("id", posts[0].fk_asks_users).select('*')
      users["user_details"] = user_of_post;
    }

    return posts;
  }

  async list_details(id_post) {
    const post = await db("asks").where("id", id_post).select("*");

    for(const users of post) {
      const user_of_post = await db("users").where("id", post[0].fk_asks_users).select('*')
      users["user_details"] = user_of_post;
    }

    for (const answers of post) {
      const total_answers = await db("answers")
        .where("fk_answers_asks", id_post)
        .select("*");
      answers["answers"] = total_answers;

      for(const users of total_answers) {
        const user_of_answer = await db("users").where("id", total_answers[0].fk_answers_users).select('*')
        users["user_details"] = user_of_answer;
      }
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
