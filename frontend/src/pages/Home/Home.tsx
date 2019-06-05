import * as React from 'react';

import Pokemon from 'components/Pokemon';
import Style from './Home.style';

import { makeGetRequest } from 'services/networking/request';

interface PokemonInterface {
  id: number;
  name: string;
}

interface Props { }
interface State {
  pokemons: PokemonInterface[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    const pokemonDict = await makeGetRequest('/pokemon');
    const pokemons = JSON.parse(pokemonDict.text);
    this.setState({ pokemons });
  }

  render(): React.ReactNode {
    const { pokemons } = this.state;

    return (
      <Style.Intro>
        <div>Bienvenue sur ton futur pokédex !</div>
        <div>
          Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
          pokemons !
        </div>
        <div>Commence par créer ton premier pokemon:</div>
        {pokemons && pokemons.map(pokemon => (
            <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
          ))}
      </Style.Intro>
    );
  }
}

export default Home;
