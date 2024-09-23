const { http } = require('../plugins')
/*const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch( url )
        .then((response) => response.json())
        //.then(() => {throw new Error('Pokemon no existe')})
        .then((pokemon) => pokemon.name);
}*/

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url) 
    return pokemon;
}

module.exports = {
    getPokemonById
}