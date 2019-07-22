import { state } from '__fixtures__/state';
import { getPokemon, getPokemons } from '../selectors';

const pokemons = {
  '33': {
    id: 33,
    name: 'nidorino',
    height: 9,
    weight: 195,
  },
  '34': {
    id: 34,
    name: 'nidoking',
    height: 14,
    weight: 620,
  },
  '35': {
    id: 35,
    name: 'clefairy',
    height: 6,
    weight: 75,
  },
};

const pokemon = {
  id: 33,
  name: 'nidorino',
  height: 9,
  weight: 195,
};

const initialState = {
  ...state,
  login: { token: null, loginError: null },
  pokemon: { pokemon: pokemons, selectedPokemon: pokemon },
};

const pokemonList = [
  { height: 9, id: 33, name: 'nidorino', weight: 195 },
  { height: 14, id: 34, name: 'nidoking', weight: 620 },
  { height: 6, id: 35, name: 'clefairy', weight: 75 },
];

describe('Pokemon selectors', () => {
  describe('getPokemons function', () => {
    it('Should return the value stored in state.pokemon', () => {
      expect(getPokemons(initialState)).toEqual(pokemonList);
    });
  });
  describe('getPokemon function', () => {
    it('Should return the value stored in state.pokemon.selectedPokemon', () => {
      expect(getPokemon(initialState)).toBe(pokemon);
    });
  });
});
