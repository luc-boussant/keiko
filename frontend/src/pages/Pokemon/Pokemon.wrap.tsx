import React from 'react';
import { makeGetRequest } from 'services/networking/request';
import Pokemon, { Props } from './Pokemon';

import withDataFetching from 'HOC/withDataFetching';

export default withDataFetching<Props>(
  'pokemon',
  (props: Props) => makeGetRequest(`/pokemon/${props.match.params.id}`),
  () => [],
)(Pokemon);
