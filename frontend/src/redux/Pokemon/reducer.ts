import { AnyAction } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import { fetchPokemonsSuccess } from './actions';

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export type PokemonMap = Record<string, PokemonType>;

export type PokemonState = Readonly<PokemonMap>;

export type PokemonAction = ActionType<typeof fetchPokemonsSuccess>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  const typedAction = action as PokemonAction;
  switch (typedAction.type) {
    case getType(fetchPokemonsSuccess):
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
