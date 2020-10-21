const db = require("../database/connection");

class AsksDao {
  constructor(connection) {
    this.db = connection;
  }

  async list_asks(id_usuario) {
    const asks = await db("asks").where("id", id_usuario).select("*");
    return asks;
  }
}

module.exports = new AsksDao(db);