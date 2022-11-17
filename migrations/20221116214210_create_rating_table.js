/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("rating", (table) => {
      table.increments();
      table.integer("rate");
      table.integer("mobile_id").references("mobiles.id");
      table.integer("user_id").references("users.id");
      table.timestamps(true, true);
    })

    .alterTable("users", function (table) {
      table.dropColumn("phones_id");
    })
    .alterTable("mobiles", function (table) {
      table.dropColumn("rate");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("rating");
};
