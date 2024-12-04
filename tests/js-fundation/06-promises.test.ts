import { getPokemonById } from "../../src/js-fundation/06-promises";

describe("js-fundation/06-factory.ts", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;

    const pokemon = await getPokemonById(pokemonId);
    expect(pokemon).toBe("bulbasaur");
  });

  test("Should return an error if pokemon  does not exist", async () => {
    const pokemonId = 10000000;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
