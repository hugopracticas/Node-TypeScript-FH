"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { emailTemplate } = require("./js-fundation/01-templates");
const { getUserById } = require("./js-fundation/03-callbacks");
const _03_callbacks_1 = require("./js-fundation/03-callbacks");
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
getUserById(id, (error, user) => {
    if (error) {
        throw new Error(error);
    }
    console.log(user);
});
(0, _03_callbacks_1.getUserByAge)(1, (error, customers) => {
    if (error) {
        throw new Error(error);
    }
    console.log(customers);
});
/**Factory functions */
// const makePerson = buildMakePerson({ getUuidv4, getAge });
// const obj = { name: "Hugo", birthdate: "1996-03-15" };
// const john = makePerson(obj);
// console.log({ john });
//# sourceMappingURL=app.js.map