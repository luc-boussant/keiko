import React from 'react';
import { CreateStandardAction } from 'typesafe-actions/dist/create-standard-action';

import Pokemon from 'components/Pokemon';
import { Navigation, StyledLink, StyledList, Title } from './Home.style';

import { FormattedMessage } from 'react-intl';
import { RouteComponentProps } from 'react-router';
import { PokemonType } from 'redux/Pokemon';

interface RouteParams {
  id: string;
}

export interface Props extends RouteComponentProps<RouteParams> {
  pokemons: PokemonType[];
  action: CreateStandardAction<'Pokemon/FETCH_POKEMONS_SUCCESS'>;
}

const Home = (props: Props) => {
  const { pokemons } = props;
  const { id } = props.match.params;

  return (
    <React.Fragment>
      <Title>
        <FormattedMessage id="home.welcome-message" />
      </Title>
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
  );
};

export default Home;
