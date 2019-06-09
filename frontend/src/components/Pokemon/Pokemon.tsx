import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { Body, Card, Image, Title } from './Pokemon.style';

interface IProps {
  name: string,
  id: number,
  weight: number,
  height: number,
};

class Pokemon extends PureComponent<IProps> {
  render(): React.ReactNode {
    const { name, id, weight, height } = this.props;
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";

    return (
      <Card>
        <Title>{name}</Title>
        <Image src={imageUrl} />
        <Body>
        <FormattedMessage id="pokemon.id" values={{ id }} />
        <FormattedMessage id="pokemon.weight" values={{ weight }} />
        <FormattedMessage id="pokemon.height" values={{ height }} />
        </Body>
      </Card>
    );
  }
}

export default Pokemon;
