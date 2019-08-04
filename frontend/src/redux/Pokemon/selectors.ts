import { RootState } from 'redux/types';
import { PokemonType } from './reducer';

export const getPokemons = (state: RootState): PokemonType[] => {
  return Object.values(state.pokemon.pokemon);
};

export const getPokemon = (state: RootState): PokemonType | null => state.pokemon.selectedPokemon;
