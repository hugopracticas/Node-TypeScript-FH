const fs = require('node:fs');
import { number } from 'yargs';
import { yarg } from './config/plugins/yargs.plugin';

console.log('YARG::',yarg.l)
const { b:base, l:limit, s:show } = yarg;

//const message: string = 'Tabla del 5';
let outputMessage = '';
const headerMessage = `
=============================
     Tabla del ${base} !!
=============================
`;


outputMessage = headerMessage + outputMessage
if( show ){
    console.log(outputMessage)
}


