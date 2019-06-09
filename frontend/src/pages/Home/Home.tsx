import * as React from 'react';

import Pokemon from 'components/Pokemon';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { StyledList, StyledLoader, Title } from './Home.style';

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
  loading: boolean;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { pokemons: [], loading: true };
  }

  async componentDidMount() {
    const pokemonDict = await makeGetRequest('/pokemon');
    const pokemons = JSON.parse(pokemonDict.text);
    this.setState({ pokemons, loading: false });
  }

  render(): React.ReactNode {
    const { pokemons, loading } = this.state;

    return (
      <React.Fragment>
        <Title>
          <FormattedMessage id="home.welcome-message" />
        </Title>
        {loading ?
          (<StyledLoader>
            <Loader />
          </StyledLoader>) :
          (<StyledList>
            {pokemons.map(pokemon => (
              <Pokemon name={pokemon.name} id={pokemon.id} weight={pokemon.weight} height={pokemon.height} key={pokemon.id} />
            ))}
          </StyledList>)}
      </React.Fragment>
    );
  }
}

export default Home;
