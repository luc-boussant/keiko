import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { FormattedMessage } from 'react-intl';
import { StyledList, Title } from './Home.style';

import { makeGetRequest } from 'services/networking/request';

interface PokemonInterface {
  id: number;
  name: string;
  weight: number;
  height: number;
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
      <React.Fragment>
        <Title>
          <FormattedMessage id="home.welcome-message" />
        </Title>
        <StyledList>
          {pokemons && pokemons.map(pokemon => (
            <Pokemon name={pokemon.name} id={pokemon.id} weight={pokemon.weight} height={pokemon.height} key={pokemon.id} />
          ))}
        </StyledList>
      </React.Fragment>
    );
  }
}

export default Home;
