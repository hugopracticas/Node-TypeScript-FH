// const { emailTemplate } = require("./js-fundation/01-templates");
// const { getUserById } = require("./js-fundation/03-callbacks");
// const { buildMakePerson } = require("./js-fundation/05-factory");
// const { getUuidv4, getAge } = require("./plugins");
//require("./js-fundation/02-destructuring");
//const { getPokemonById } = require("./js-fundation/06-promises");
const { buildLogger } = require("./plugins");

/**Logger */
const logger = buildLogger("app.js");

logger.log("Hola mundo");
logger.error("Estoves algo malo");

/**Get pkemon with axios */
// getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log("Por favor intente de nuevo"))
//   .finally(() => console.log("Finalmente"));

//console.log(emailTemplate);
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });

/**Factory functions */
// const makePerson = buildMakePerson({ getUuidv4, getAge });

// const obj = { name: "Hugo", birthdate: "1990-03-15" };

// const john = makePerson(obj);

// console.log({ john });
