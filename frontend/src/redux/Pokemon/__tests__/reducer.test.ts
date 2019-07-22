import { fetchPokemonsSuccess, fetchPokemonSuccess } from '../actions';
import reducer from '../reducer';

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

const initialState = { pokemon: {}, selectedPokemon: null };

describe('Pokemon reducer', () => {
  describe('Pokemon FETCH_POKEMONS_SUCCESS case', () => {
    it('Should return an initial state with pokemons in the pokemon field', () => {
      const action = fetchPokemonsSuccess(pokemons);
      const expectedState = { ...initialState, pokemon: pokemons };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });

  describe('Pokemon FETCH_POKEMON_SUCCESS case', () => {
    it('Should return an initial state with a pokemon in the pokemon.selectedPokemon field', () => {
      const action = fetchPokemonSuccess(pokemon);
      const expectedState = { ...initialState, selectedPokemon: pokemon };

      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
