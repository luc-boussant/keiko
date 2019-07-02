import { createStandardAction } from 'typesafe-actions';
import { PokemonState } from './reducer';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<
  PokemonState
>();

export default {
  fetchPokemonsSuccess,
};
