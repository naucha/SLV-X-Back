/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("mobiles", (table) => {
      table.increments();
      table.text("brand").notNullable();
      table.text("model").notNullable();
      table.integer("rate");
      table.timestamps(true, true);
    })
    .createTable("users", (table) => {
      table.increments();
      table.string("name").notNullable().index();
      table.timestamps(true, true);

      table
        .integer("phones_id")
        .unsigned()
        .references("id")
        .inTable("mobiles")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("mobiles").dropTableIfExists("users");
};
