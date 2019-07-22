import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

import withDataFetching from 'HOC/withDataFetching';
import { Dispatch } from 'redux';
import { fetchPokemonsSuccess, getPokemons, PokemonMap, PokemonType } from 'redux/Pokemon';
import { normalize } from 'services/PokemonNormalizer';

const mapStateToProps = (state: RootState) => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => ({
  fetchPokemons: (data: PokemonMap) => dispatch(fetchPokemonsSuccess(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => makeGetRequest(`/pokemon`, { page: props.match.params.page }),
    (props: Props) => [props.match.params.page],
    (props: Props, data: PokemonType[]) => {
      props.fetchPokemons(normalize(data));
    },
  )(Home),
);
