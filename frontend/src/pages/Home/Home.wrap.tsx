import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { RootState } from 'redux/types';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

import withDataFetching from 'HOC/withDataFetching';

const mapStateToProps = (state: RootState) => {
  const { pokemon } = state;
  const pokemons = Object.values(pokemon);
  return { pokemons };
};

export default connect(
  mapStateToProps,
  null,
)(Home);
