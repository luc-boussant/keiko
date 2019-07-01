import { AnyAction } from 'redux';

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export type PokemonState = Readonly<Record<string, PokemonType>>;

const initialState: PokemonState = {};

const reducer = (state: PokemonState = initialState, action: AnyAction) => {
  return state;
};

export default reducer;
