// Update with your config settings.

import { Knex } from "knex";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/mobile.db3",
    },
    useNullAsDefault: true,
  },
} as Knex.Config;
