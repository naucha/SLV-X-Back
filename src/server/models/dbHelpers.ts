import { Mobile } from "../types/types";

const knex = require("knex");
const config = require("../../../knexfile");

const db = knex(config.development);

const add = async (mobile: Mobile) => {
  const [id] = await db("mobiles").insert(mobile);
  return id;
};

const find = async () => {
  return await db("mobiles");
};

const findById = async (id: number) => {
  return await db.from("mobiles").select("*").where({ id }).first();
};

module.exports = { add, find, findById };
