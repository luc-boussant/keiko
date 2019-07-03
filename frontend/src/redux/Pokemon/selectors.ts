import { RootState } from 'redux/types';
import { PokemonType } from './reducer';

export const getPokemons = (state: RootState): PokemonType[] => Object.values(state.pokemon);
export const getPokemon = (state: RootState): PokemonType => state.pokemon.selectedPokemon;
