// const { emailTemplate } = require("./js-fundation/01-templates");
const { getUserById } = require("./js-fundation/03-callbacks");
import { User } from "./interfaces/appInterfaces";
import { customers } from "./data/customers";
import { getUserByAge } from "./js-fundation/03-callbacks";
// const { buildMakePerson } = require("./js-fundation/05-factory");
const { getUuidv4, getAge } = require("./plugins");
//require("./js-fundation/02-destructuring");
//const { getPokemonById } = require("./js-fundation/06-promises");

import { buildLogger } from "./plugins/logger.plugin";
import { buildMakePerson } from "./js-fundation/05-factory";
import { getPokemonById } from "./js-fundation/06-promises";

// interface User {
//   id: number;
//   name: string;
// }
/**Logger */
// const logger = buildLogger("app.js");

// logger.log("Hola mundo");
// logger.error("Estoves algo malo");
/*const logger = buildLogger("app.js");

*/

/**Get pkemon with axios */
// getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log("Por favor intente de nuevo"))
//   .finally(() => console.log("Finalmente"));

//console.log(emailTemplate);
const id = 2;
/*getUserById(id, (error: string, user: User) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});

getUserByAge(1, (error, customers) => {
  if (error) {
    throw new Error(error);
  }
  console.log(customers);
});*/

/**Factory functions */
/*const makePerson = buildMakePerson({ getUuidv4, getAge });

const obj = { name: "Hugo", birthdate: "1996-03-15" };

const john = makePerson(obj);

console.log({ john });*/

/**Promises, getPokemon() */

const getPokemon = async () => {
  const pokemon = await getPokemonById(1);
  console.log("Quien es ese pokemon:", pokemon);
};
getPokemon();
