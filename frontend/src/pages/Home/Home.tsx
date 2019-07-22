import React, { useEffect, useState } from 'react';

import Pokemon from 'components/Pokemon';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { StyledList, StyledLoader, Title } from './Home.style';

import { makeGetRequest } from 'services/networking/request';

interface PokemonInterface {
  id: number;
  name: string;
  weight: number;
  height: number;
}

// tslint:disable-next-line:no-empty-interface
interface Props {}

const Home: React.FunctionComponent<Props> = props => {
  const [pokemons, setPokemons] = useState([] as PokemonInterface[]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const pokemonDict = await makeGetRequest('/pokemon');
        const pokemonList = JSON.parse(pokemonDict.text);
        setPokemons(pokemonList);
        setLoading(false);
      } catch (error) {
        setApiError(true);
      }
    };
    getPokemonList();
  });

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
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
