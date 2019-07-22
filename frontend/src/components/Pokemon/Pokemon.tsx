import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import Style from './Pokemon.style';

interface IProps {
  name: string,
  id: number,
};

class Pokemon extends PureComponent<IProps> {
  render(): React.ReactNode {
    const { name, id } = this.props;
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";

    return (
      <Style.Intro>
        <div><img src={imageUrl} /></div>
        <FormattedMessage id="pokemon.id" values={{ id }} />
        <FormattedMessage id="pokemon.name" values={{ name }} />
      </Style.Intro>
    );
  }
}

export default Pokemon;
