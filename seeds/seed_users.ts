import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("mobiles").del();

  // Inserts seed entries
  await knex("users").insert([
    { id: 1, name: "Joe" },
    { id: 2, name: "Charles" },
    { id: 3, name: "Ana" },
  ]);
  const apple = { id: 1, brand: "Apple", model: "10" };
  const apple2 = { id: 2, brand: "Apple", model: "12" };
  const apple3 = { id: 3, brand: "Apple", model: "14" };
  const samsung = { id: 4, brand: "Samsung", model: "Galaxy" };
  const samsung2 = { id: 5, brand: "Samsung", model: "Galaxy N" };
  const samsung3 = { id: 6, brand: "Samsung", model: "Galaxy S" };
  const xiaomi = { id: 7, brand: "Xiomi", model: "Xv3" };
  const xiaomi2 = { id: 8, brand: "Xiomi", model: "Xv6" };
  // Inserts seed entries
  await knex("mobiles").insert([
    apple,
    apple2,
    apple3,
    samsung,
    samsung2,
    samsung3,
    xiaomi,
    xiaomi2,
  ]);
}
