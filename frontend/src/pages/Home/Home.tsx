import * as React from 'react';
import { FormattedMessage } from 'react-intl';

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
        <FormattedMessage id="home.welcome-message" />
        {pokemons && pokemons.map(pokemon => (
          <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
        ))}
      </Style.Intro>
    );
  }
}

export default Home;
