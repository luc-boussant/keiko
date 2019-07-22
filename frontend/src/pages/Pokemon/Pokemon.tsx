import React from 'react';
import { RouteComponentProps } from 'react-router';

import { FormattedMessage } from 'react-intl';
import { PokemonMap } from 'redux/Pokemon';

import { Body, Card, Image, ImageList, Title } from './Pokemon.style';

interface PokemonInterface {
  id: number;
  name: string;
  weight: number;
  height: number;
}

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemon: PokemonInterface;
  fetchPokemon: (pokemons: PokemonMap) => void;
}

const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const getFrontImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}${id}.png`;
const getFrontShinyImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}shiny/${id}.png`;
const getBackImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}back/${id}.png`;
const getBackShinyImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}back/shiny/${id}.png`;
const getHeightInCm = (height: number) => height * 10;
const getWeightinKg = (weight: number) => weight / 10;

const Home = (props: Props) => {
  const { pokemon } = props;

  return (
    <Card>
      <Title>{pokemon.name}</Title>
      <ImageList>
        <Image src={getFrontImageUrl(pokemon.id)} />
        <Image src={getBackImageUrl(pokemon.id)} />
        <Image src={getFrontShinyImageUrl(pokemon.id)} />
        <Image src={getBackShinyImageUrl(pokemon.id)} />
      </ImageList>
      <Body>
            <FormattedMessage
              id="pokemon.height"
              values={{ height: getHeightInCm(pokemon.height) }}
            />
            <FormattedMessage
              id="pokemon.weight"
              values={{ weight: getWeightinKg(pokemon.weight) }}
            />
        <FormattedMessage id="pokemon.id" values={{ id: pokemon.id }} />
      </Body>
    </Card>
  );
};

export default Home;
