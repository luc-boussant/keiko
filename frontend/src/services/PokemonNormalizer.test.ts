import { state } from '__fixtures__/state';
import { normalize } from './PokemonNormalizer';

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

const pokemonList = [
  { height: 9, id: 33, name: 'nidorino', weight: 195 },
  { height: 14, id: 34, name: 'nidoking', weight: 620 },
  { height: 6, id: 35, name: 'clefairy', weight: 75 },
];

describe('Pokemon normalizer', () => {
  describe('normalize function', () => {
    it('Should return the normalized value of the pokemonMap', () => {
      expect(normalize(pokemonList)).toEqual(pokemons);
    });

    it('Should return {} if we try to normalize an empty list', () => {
      expect(normalize([])).toEqual({});
    });
  });
});
