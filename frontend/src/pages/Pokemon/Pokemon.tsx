import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { FormattedMessage } from 'react-intl';
import { ReactComponent as Loader } from '../../assets/loader.svg';

import { makeGetRequest } from 'services/networking/request';
import { Body, Card, Image, ImageList, StyledLoader, Title } from './Pokemon.style';

interface PokemonInterface {
  id: number;
  name: string;
  weight: number;
  height: number;
}

interface Props {
  id: string;
}

const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const getFrontImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + id + '.png';
const getFrontShinyImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + 'shiny/' + id + '.png';
const getBackImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + 'back/' + id + '.png';
const getBackShinyImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + 'back/shiny/' + id + '.png';

const Home: React.FunctionComponent<RouteComponentProps<Props>> = props => {
  const [pokemon, setPokemon] = useState({} as PokemonInterface);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    const getPokemon = async (pokemonId: number) => {
      try {
        const pokemonDict = await makeGetRequest('/pokemon/' + pokemonId);
        const apiPokemon = JSON.parse(pokemonDict.text);
        setPokemon(apiPokemon);
        setLoading(false);
      } catch (error) {
        setApiError(true);
      }
    };
    getPokemon(parseInt(id, 10));
  });

  return (
    <React.Fragment>
      {apiError ? (
        <FormattedMessage id="home.api-error-message" />
      ) : (
        <React.Fragment>
          {loading ? (
            <StyledLoader>
              <Loader />
            </StyledLoader>
          ) : (
            <Card>
              <Title>{pokemon.name}</Title>
              <ImageList>
                <Image src={getFrontImageUrl(pokemon.id)} />
                <Image src={getBackImageUrl(pokemon.id)} />
                <Image src={getFrontShinyImageUrl(pokemon.id)} />
                <Image src={getBackShinyImageUrl(pokemon.id)} />
              </ImageList>
              <Body>
                <FormattedMessage id="pokemon.height" values={{ height: pokemon.height * 10 }} />
                <FormattedMessage id="pokemon.weight" values={{ weight: pokemon.weight / 10 }} />
                <FormattedMessage id="pokemon.id" values={{ id: pokemon.id }} />
              </Body>
            </Card>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
