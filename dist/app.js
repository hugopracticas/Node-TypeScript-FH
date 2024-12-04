"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { emailTemplate } = require("./js-fundation/01-templates");
const { getUserById } = require("./js-fundation/03-callbacks");
// const { buildMakePerson } = require("./js-fundation/05-factory");
const { getUuidv4, getAge } = require("./plugins");
const _05_factory_1 = require("./js-fundation/05-factory");
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
const makePerson = (0, _05_factory_1.buildMakePerson)({ getUuidv4, getAge });
const obj = { name: "Hugo", birthdate: "1996-03-15" };
const john = makePerson(obj);
console.log({ john });
//# sourceMappingURL=app.js.map