const {getAge, getUuidv4} = require('./plugins');
const {buildMakePerson} = require('./js-foundation/05-factory');
//const message = 'Hola Mundo';
//console.log(message);
//const {emailTemplate} = require('./js-foundation/01-template')
//require('./js-foundation/02-destructuring')
//const {getUserById} = require('./js-foundation/03-callbacks');

//console.log(emailTemplate)

/*const id = 2;

getUserById(id, (error, user) => {
    if( error ) {
        throw new Error(error)
    }
    console.log(user)
})*/

/**Factory function */

const makePerson = buildMakePerson({getUuidv4, getAge});

const obj = { name: 'Hugo', birthdate: '1990-03-15'};

const hugo = makePerson(obj);

console.log(hugo);
