console.log('1.- Inicio de programa');

setTimeout( () => {
    console.log('5.- Primer Timeout');
}, 3000 );


setTimeout( () => {
    console.log('3.- Segundo Timeout');
}, 0 );


setTimeout( () => {
    console.log('4.- Tercer Timeout');
}, 0 );


console.log('2.- Fin de programa');