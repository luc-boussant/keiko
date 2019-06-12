import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Body, Card, Image, Title } from './Pokemon.style';

interface Props {
  name: string,
  id: number,
  weight: number,
  height: number,
};

const getImageUrl = (id: number) => ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png");

const Pokemon: React.FunctionComponent<Props> = (props) => (
  <Card>
    <Title>{props.name}</Title>
    <Image src={getImageUrl(props.id)} />
    <Body>
      <FormattedMessage id="pokemon.id" values={{ id: props.id }} />
      <FormattedMessage id="pokemon.weight" values={{ weight: props.weight }} />
      <FormattedMessage id="pokemon.height" values={{ height: props.height }} />
    </Body>
  </Card>
);

export default Pokemon;
