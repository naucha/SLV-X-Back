export {};
const knex = require("knex");
const config = require("../../../../knexfile");

const db = knex(config.development);

const getAllRatings = async () => {
  return await db.from("rating");
};

const getCountByMobileId = async (mobile_id: number) => {
  const allRates = await db.from("rating").select("rate").where({ mobile_id });

  console.log(allRates);
  return [allRates];
};

module.exports = { getAllRatings, getCountByMobileId };
