import React, { PureComponent } from 'react';

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
        <div>{id}: {name}</div>
      </Style.Intro>
    );
  }
}

export default Pokemon;
