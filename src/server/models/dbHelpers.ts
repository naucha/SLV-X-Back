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

module.exports = { add, find };
