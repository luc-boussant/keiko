import { createStandardAction } from 'typesafe-actions';
import { PokemonType } from './reducer';

export const fetchPokemonsSuccess = createStandardAction('Pokemon/FETCH_POKEMONS_SUCCESS')<{
  pokemons: PokemonType[];
}>();

export default {
  fetchPokemonsSuccess,
};