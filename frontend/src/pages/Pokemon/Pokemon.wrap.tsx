import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { makeGetRequest } from 'services/networking/request';
import Pokemon, { Props } from './Pokemon';

import withDataFetching from 'HOC/withDataFetching';
import { fetchPokemonSuccess, getPokemon, PokemonType } from 'redux/Pokemon';
import { RootState } from 'redux/types';

const mapStateToProps = (state: RootState) => ({
  pokemon: getPokemon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPokemon: (data: PokemonType) => dispatch(fetchPokemonSuccess(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withDataFetching<Props>(
    (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
    (props: Props) => [],
    (props: Props, data: PokemonType) => {
      props.fetchPokemon(data);
    },
  )(Pokemon),
);
