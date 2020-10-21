const db = require("../database/connection");

class PostsDao {
  constructor(connection) {
    this.db = connection;
  }
  async listPosts() {
    const posts = await db('asks').select('*');
    return posts;
  }
}

module.exports = new PostsDao(db);
