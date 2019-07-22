import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as TurnIcon } from '../../assets/turn-icon.svg';

import { Body, Card, Image, StyledButton, Title } from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const getFrontImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + id + '.png';
const getBackImageUrl = (id: number) => POKEMON_IMAGE_BASE_URL + 'back/' + id + '.png';

const Pokemon: React.FunctionComponent<Props> = props => {
  const [showFrontImage, setShowFrontImage] = useState(true);
  return (
    <Card>
      <StyledButton onClick={() => setShowFrontImage(!showFrontImage)}>
        <TurnIcon />
      </StyledButton>
      <Title>{props.name}</Title>
      <Image src={showFrontImage ? getFrontImageUrl(props.id) : getBackImageUrl(props.id)} />
      <Body>
        <FormattedMessage id="pokemon.id" values={{ id: props.id }} />
        <FormattedMessage id="pokemon.weight" values={{ weight: props.weight }} />
        <FormattedMessage id="pokemon.height" values={{ height: props.height }} />
      </Body>
    </Card>
  );
};

export default Pokemon;
