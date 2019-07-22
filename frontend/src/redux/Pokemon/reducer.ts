import { AnyAction } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { fetchPokemonsSuccess, fetchPokemonSuccess } from './actions';

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export type PokemonMap = Record<string, PokemonType>;

export interface PokemonState {
  pokemon: Readonly<PokemonMap>;
  selectedPokemon: PokemonType | null;
}

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess | typeof fetchPokemonSuccess>;

const initialState: PokemonState = { pokemon: {}, selectedPokemon: null };

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return { ...state, pokemon: action.payload };
    case getType(fetchPokemonSuccess):
      return { ...state, selectedPokemon: action.payload };
    default:
      return state;
  }
};

export default reducer;
