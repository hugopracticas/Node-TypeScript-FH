//const { getUuidv4, getAge } = require("../plugins");

const buildMakePerson = ({ getUuidv4, getAge }) => {
  return ({ name, birthdate }) => {
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

module.exports = {
  buildMakePerson,
};
