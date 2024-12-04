//const { getUuidv4, getAge } = require("../plugins");

import { BuildMakerPerson, PersonOptions } from "../interfaces/appInterfaces";

export const buildMakePerson = ({ getUuidv4, getAge }: BuildMakerPerson) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUuidv4(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
// const obj = { name: "Hugo", birthdate: "1990-03-15" };

// const john = buildPerson(obj);

// console.log(john);
