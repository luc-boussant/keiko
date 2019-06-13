import React, { useEffect, useState } from 'react';

import Pokemon from 'components/Pokemon';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { Navigation, StyledLink, StyledList, StyledLoader, Title } from './Home.style';

import { RouteComponentProps } from 'react-router';
import { makeGetRequest } from 'services/networking/request';

interface PokemonInterface {
  id: number;
  name: string;
  weight: number;
  height: number;
}

interface Props {
  id: string;
}

const Home: React.FunctionComponent<RouteComponentProps<Props>> = props => {
  const [pokemons, setPokemons] = useState([] as PokemonInterface[]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const { id } = props.match.params;

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const pokemonDict = await makeGetRequest('/pokemon', { page: id });
        const pokemonList = JSON.parse(pokemonDict.text);
        setPokemons(pokemonList);
        setLoading(false);
      } catch (error) {
        setApiError(true);
      }
    };
    getPokemonList();

    return function cleanup() {
      setPokemons([]);
      setLoading(true);
      setApiError(false);
    };
  }, [id]);

  return (
    <React.Fragment>
      <Title>
        <FormattedMessage id="home.welcome-message" />
      </Title>
      {apiError ? (
        <FormattedMessage id="home.api-error-message" />
      ) : (
        <React.Fragment>
          {loading ? (
            <StyledLoader>
              <Loader />
            </StyledLoader>
          ) : (
            <React.Fragment>
              <Navigation>
                <StyledLink to={(parseInt(id, 10) - 1).toString()}>
                  {parseInt(id, 10) > 1 && '<'}
                </StyledLink>

                <StyledLink to={(parseInt(id, 10) + 1).toString()}>
                  {parseInt(id, 10) < 6 && '>'}
                </StyledLink>
              </Navigation>
              <StyledList>
                {pokemons.map(pokemon => (
                  <Pokemon
                    name={pokemon.name}
                    id={pokemon.id}
                    weight={pokemon.weight}
                    height={pokemon.height}
                    key={pokemon.id}
                  />
                ))}
              </StyledList>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
