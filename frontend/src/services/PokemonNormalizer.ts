import { PokemonMap, PokemonType } from 'redux/Pokemon';

export const normalize = (pokemons: PokemonType[]): PokemonMap =>
  pokemons.reduce(
    (pokemonMap: PokemonMap, pokemon) => ({
      ...pokemonMap,
      [pokemon.id]: pokemon,
    }),
    {},
  );
