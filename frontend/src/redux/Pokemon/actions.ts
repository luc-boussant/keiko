import { createStandardAction } from 'typesafe-actions';
import { PokemonMap, PokemonType } from './reducer';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  Readonly<PokemonMap>
>();

export const fetchPokemonSuccess = createStandardAction('Pokemon/FETCH_POKEMON_SUCCESS')<
  PokemonType
>();

export default {
  fetchPokemonsSuccess,
  fetchPokemonSuccess,
};
