import * as React from 'react';

import Pokemon from 'components/Pokemon';
import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    const pokemons = {7: 'Carapuce', 8: 'Carabaffe', 9: 'Tortank'};

    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <div>Commence par créer ton premier pokemon:</div>
        <Pokemon name={pokemons[7]} id={7} />
        <Pokemon name={pokemons[8]} id={8} />
        <Pokemon name={pokemons[9]} id={9} />
      </Style.Intro>
    );
  }
}

export default Home;
