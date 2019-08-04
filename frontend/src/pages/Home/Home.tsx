import React from 'react';

import Pokemon from 'components/Pokemon';
import { Navigation, StyledLink, StyledList, Title } from './Home.style';

import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { PokemonMap, PokemonType } from 'redux/Pokemon';

interface RouteParams {
  page: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: PokemonType[];
  fetchPokemons: (pokemons: PokemonMap) => void;
}

const getPreviousPage = (page: string) => parseInt(page, 10) - 1;
const getNextPage = (page: string) => parseInt(page, 10) + 1;
const shouldShowPreviousPageLink = (page: string) => parseInt(page, 10) > 1;
const shouldShowNextPageLink = (page: string) => parseInt(page, 10) < 6;

const Home = (props: Props) => {
  const { pokemons } = props;
  const { page } = props.match.params;

  return (
    <React.Fragment>
      <Title>
        <FormattedMessage id="home.welcome-message" />
      </Title>
      <Navigation>
        <StyledLink to={getPreviousPage(page).toString()}>
          {shouldShowPreviousPageLink(page) && '<'}
        </StyledLink>
        <StyledLink to={getNextPage(page).toString()}>
          {shouldShowNextPageLink(page) && '>'}
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
  );
};

export default Home;
