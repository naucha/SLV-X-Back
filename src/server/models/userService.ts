const knex = require("knex");
const config = require("../../../knexfile");

const db = knex(config.development);

const findUserByName = async (name: string) => {
  return await db.from("users").select("*").where({ name }).first();
};

module.exports = { findUserByName };
