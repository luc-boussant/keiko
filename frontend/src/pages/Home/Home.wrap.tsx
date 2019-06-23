import React from 'react';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';

import withDataFetching from 'HOC/withDataFetching';

export default withDataFetching<Props>(
  'pokemons',
  (props: Props) => makeGetRequest(`/pokemon`, { page: props.match.params.id }),
  (props: Props) => [props.match.params.id],
)(Home);
