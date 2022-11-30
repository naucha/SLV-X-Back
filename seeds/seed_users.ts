import { Knex } from "knex";
import { IMobileSeed } from "../src/server/types/types";
const mobileService = require("../src/server/models/mobileService");
const userService = require("../src/server/models/userService");

export async function seed(knex: Knex): Promise<void> {
  await knex("users").del();
  await knex("mobiles").del();
  await knex("rating").del();

  let joe: any = { name: "Joe" };
  let charles: any = { name: "Charles" };
  let ana: any = { name: "Ana" };
  let betty: any = { name: "Betty" };

  await knex("users").insert([joe, charles, ana, betty]);

  let apple: IMobileSeed = { brand: "Apple", model: "10" };
  let apple2: IMobileSeed = { brand: "Apple", model: "12" };
  let apple3: IMobileSeed = { brand: "Apple", model: "14" };
  let samsung: IMobileSeed = { brand: "Samsung", model: "Galaxy" };
  let samsung2: IMobileSeed = { brand: "Samsung", model: "Galaxy N" };
  let samsung3: IMobileSeed = { brand: "Samsung", model: "Galaxy S" };
  let xiaomi: IMobileSeed = { brand: "Xiaomi", model: "Xv3" };
  let xiaomi2: IMobileSeed = { brand: "Xiaomi", model: "Xv6" };

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

  joe = await userService.findUserByName(joe.name);
  charles = await userService.findUserByName(charles.name);
  ana = await userService.findUserByName(ana.name);
  betty = await userService.findUserByName(betty.name);

  apple = await mobileService.findMobile(apple.brand, apple.model);
  apple2 = await mobileService.findMobile(apple2.brand, apple2.model);
  apple3 = await mobileService.findMobile(apple3.brand, apple3.model);
  samsung = await mobileService.findMobile(samsung.brand, samsung.model);
  samsung2 = await mobileService.findMobile(samsung2.brand, samsung2.model);
  samsung3 = await mobileService.findMobile(samsung3.brand, samsung3.model);
  xiaomi = await mobileService.findMobile(xiaomi.brand, xiaomi.model);
  xiaomi2 = await mobileService.findMobile(xiaomi2.brand, xiaomi2.model);

  const ratings = [
    { rate: 6, mobile_id: apple.id, user_id: joe.id },
    { rate: 8, mobile_id: apple.id, user_id: ana.id },
    { rate: 8, mobile_id: apple.id, user_id: betty.id },
    { rate: 4, mobile_id: apple2.id, user_id: charles.id },
    { rate: 7, mobile_id: apple2.id, user_id: joe.id },
    { rate: 3, mobile_id: apple3.id, user_id: ana.id },
    { rate: 8, mobile_id: apple3.id, user_id: betty.id },
    { rate: 6, mobile_id: apple3.id, user_id: joe.id },
    { rate: 7, mobile_id: samsung.id, user_id: charles.id },
    { rate: 9, mobile_id: samsung.id, user_id: betty.id },
    { rate: 6, mobile_id: samsung2.id, user_id: ana.id },
    { rate: 5, mobile_id: samsung2.id, user_id: joe.id },
    { rate: 7, mobile_id: samsung2.id, user_id: charles.id },
    { rate: 6, mobile_id: samsung3.id, user_id: ana.id },
    { rate: 5, mobile_id: samsung3.id, user_id: charles.id },
    { rate: 3, mobile_id: samsung3.id, user_id: betty.id },
    { rate: 9, mobile_id: xiaomi.id, user_id: joe.id },
    { rate: 10, mobile_id: xiaomi.id, user_id: charles.id },
    { rate: 8, mobile_id: xiaomi2.id, user_id: charles.id },
    { rate: 6, mobile_id: xiaomi2.id, user_id: betty.id },
  ];

  await knex("rating").insert(ratings);
}
