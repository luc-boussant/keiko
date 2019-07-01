import React from 'react';
import { connect } from 'react-redux';

import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

import withDataFetching from 'HOC/withDataFetching';
import { Dispatch } from 'redux';
import { fetchPokemonsSuccess } from 'redux/Pokemon';

const mapStateToProps = (state: RootState) => {
  const { pokemon } = state;
  const pokemons = Object.values(pokemon);
  return { pokemons };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: Props) => {
  action: dispatch(fetchPokemonsSuccess(ownProps));
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    'pokemons',
    (props: Props) => {
      makeGetRequest(`/pokemon`, { page: props.match.params.id });
      props.action();
    },
    (props: Props) => [props.match.params.id],
  )(Home),
);
