import React, {useCallback, useEffect, useState} from 'react';
import {
  Container,
  Header,
  BackButton,
  PageTitle,
  PokemonsList,
  BackButtonIcon,
} from './styles';
import logo from '../../assets/images/background/pages/pokeball-background.png';
import {PokemonBackgroundImage} from '../Main/styles';
import PokemonItem from '../../components/PokemonItem';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

interface PokemonListResponse {
  results: [
    {
      name: string;
      url: string;
    },
  ];
}

interface PokemonResponse {
  id: number;
  name: string;
  types: [{slot: number; type: {name: string}}];
}

export interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
}

const PokedexList: React.FC = () => {
  const navigation = useNavigation();

  const [pokemonListResponse, setPokemonListResponse] = useState(
    {} as PokemonListResponse,
  );

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const pad = useCallback((num: number, size: number): string => {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }, []);

  const loadNextPokemons = useCallback(() => {
    api
      .get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 20,
          offset: pokemons.length,
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setPokemonListResponse(response.data);
      });
  }, [pokemons]);

  useEffect(() => {
    if (pokemonListResponse.results) {
      const promises = pokemonListResponse.results.map(
        (pokemonResponse): Promise<Pokemon> => {
          return api
            .get<PokemonResponse>(pokemonResponse.url)
            .then((response) => {
              const {id, name} = response.data;
              const types = response.data.types.map((item) => {
                return `${item.type.name
                  .charAt(0)
                  .toUpperCase()}${item.type.name.slice(1)}`;
              });

              return {
                id: pad(id, 3),
                name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
                image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(
                  id,
                  3,
                )}.png`,
                types,
              };
            });
        },
      );

      Promise.all(promises).then((items) => {
        setPokemons([...pokemons, ...items]);
      });
    }
  }, [pokemonListResponse]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  useEffect(() => {
    loadNextPokemons();
  }, []);

  return (
    <Container>
      <PokemonBackgroundImage source={logo} />

      <Header>
        <BackButton onPress={handleGoBack}>
          <BackButtonIcon name="arrow-left" size={18} />
        </BackButton>
      </Header>

      <PokemonsList
        data={pokemons}
        numColumns={2}
        ListHeaderComponent={<PageTitle>Pokedex</PageTitle>}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({item: pokemon}) => (
          <PokemonItem
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        )}
        onEndReached={loadNextPokemons}
        onEndReachedThreshold={0.3}
      />
    </Container>
  );
};

export default PokedexList;
