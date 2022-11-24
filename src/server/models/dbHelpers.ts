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

const del = async (id: number) => {
  return await db.from("mobiles").where("id", id).del();
};

const findById = async (id: number) => {
  return await db.from("mobiles").select("*").where({ id }).first();
};

const findByIdAndUpdate = async (
  id: number,
  brand?: string,
  model?: string
) => {
  return await db
    .from("mobiles")
    .select("*")
    .where({ id })
    .update({ brand: brand, model: model }, ["brand", "model"])
    .update("updated_at", db.fn.now());
};

module.exports = { add, find, findById, del, findByIdAndUpdate };
