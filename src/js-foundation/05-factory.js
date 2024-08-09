
//const {getAge} = require('../plugins/get-age.plugin.js');
//const { getUuidv4 } = require('../plugins/get-id.plugin.js');
//const {getAge, getUuidv4} = require('../plugins')

/*const buildPerson = ({ name, birthdate}) => {

    return {
        id: getUuidv4(),
        name,
        birthdate,
        age: getAge(birthdate),
    }
}*/

/*const obj = { name: 'John', birthdate: '1990-03-15' };

const john = buildPerson(obj)

console.log(john)*/


/**Factory function */
const buildMakePerson = ({getUuidv4, getAge}) => {
    return ({ name, birthdate}) => {

        return {
            id: getUuidv4(),
            name,
            birthdate,
            age: getAge(birthdate),
        }
    } 
}



module.exports = {
    //buildPerson,
    buildMakePerson
}