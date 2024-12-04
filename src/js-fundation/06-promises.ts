const { http } = require("../plugins");

export const getPokemonById = async (id: number) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }

  // return fetch(url)
  //   .then((response) => response.json())
  //   .then(() => {
  //     throw new Error("Pokemon no existe");
  //   })
  //   .then((pokemon) => pokemon.name);
};
