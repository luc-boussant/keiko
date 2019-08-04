import React, { MouseEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as TurnIcon } from '../../assets/turn-icon.svg';

import { Body, Card, Image, StyledButton, StyledLink, Title } from './Pokemon.style';

interface Props {
  name: string;
  id: number;
  weight: number;
  height: number;
}

const POKEMON_IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const getFrontImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}${id}.png`;
const getBackImageUrl = (id: number) => `${POKEMON_IMAGE_BASE_URL}back/${id}.png`;
const getHeightInCm = (height: number) => height * 10;
const getWeightinKg = (weight: number) => weight / 10;

const Pokemon: React.FunctionComponent<Props> = props => {
  const [showFrontImage, setShowFrontImage] = useState(true);
  const flipImage = (event: MouseEvent) => {
    // Stop the oncClick event to see the pokemon details
    event.preventDefault();
    event.stopPropagation();
    setShowFrontImage(!showFrontImage);
  };
  return (
    <Card>
      <StyledLink to={`pokemon/${props.id}`}>
        <StyledButton onClick={flipImage}>
          <TurnIcon />
        </StyledButton>
        <Title>{props.name}</Title>
        <Image src={showFrontImage ? getFrontImageUrl(props.id) : getBackImageUrl(props.id)} />
        <Body>
          <FormattedMessage id="pokemon.id" values={{ id: props.id }} />
          <FormattedMessage id="pokemon.weight" values={{ weight: getWeightinKg(props.weight) }} />
          <FormattedMessage id="pokemon.height" values={{ height: getHeightInCm(props.height) }} />
        </Body>
      </StyledLink>
    </Card>
  );
};

export default Pokemon;
