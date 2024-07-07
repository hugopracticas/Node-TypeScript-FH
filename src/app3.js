const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const words = content.split(' ');
let number = 0;


const reactWords = (list) => {
    for(let word of list){
        const dividedWord = word.split(':');
        for(let i of dividedWord){
            const dividedDiv = i.split('/');
            for(let div of dividedDiv){
                if(div.toLowerCase().includes('react')){
                    number += 1;
                }  
            }
        }
    }
    return number
}

console.log(reactWords(words));