import React, {useCallback, useEffect, useState} from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  Header,
  HeaderTitle,
  PageTitle,
  PokemonsList,
} from './styles';
import logo from '../../assets/images/background/pages/pokeball-background.png';
import {PokemonBackgroundImage} from '../Main/styles';
import PokemonItem from '../../components/PokemonItem';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import Animated, {Extrapolate} from 'react-native-reanimated';
import {onScrollEvent} from 'react-native-redash';
import {ActivityIndicator, View} from 'react-native';

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

  const HEADER_EXPANDED_HEIGHT = 120;
  const HEADER_COLLAPSED_HEIGHT = 50;

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);
  const [pokemonListResponse, setPokemonListResponse] = useState(
    {} as PokemonListResponse,
  );
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const headerHeight = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });

  const headerTitleOpacity = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const heroTitleOpacity = Animated.interpolate(scrollY, {
    inputRange: [0, 10],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const pad = useCallback((num: number, size: number): string => {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }, []);

  const renderLoadingFooter = useCallback(() => {
    if (!loading) {
      return <View />;
    }

    return (
      <ActivityIndicator
        style={{marginBottom: 20, marginTop: 20, minHeight: 70}}
      />
    );
  }, [loading]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const loadNextPokemons = useCallback(() => {
    setLoading(true);

    api
      .get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: 20,
          offset: pokemons.length,
        },
      })
      .then((response) => {
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
        setLoading(false);
      });
    }
  }, [pokemonListResponse]);

  useEffect(() => {
    loadNextPokemons();
  }, []);

  return (
    <Container>
      <PokemonBackgroundImage source={logo} />

      <Animated.View
        style={{
          height: headerHeight,
        }}>
        <Header>
          <BackButton onPress={handleGoBack}>
            <BackButtonIcon name="arrow-left" size={18} />
          </BackButton>

          <Animated.View style={[{opacity: headerTitleOpacity}]}>
            <HeaderTitle>Pokedex</HeaderTitle>
          </Animated.View>
        </Header>

        <Animated.View style={{opacity: heroTitleOpacity}}>
          <PageTitle>Pokedex</PageTitle>
        </Animated.View>
      </Animated.View>

      <PokemonsList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon: Pokemon) => pokemon.id}
        renderItem={({item: pokemon}: {item: Pokemon}) => (
          <PokemonItem
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            onPress={() => {
              navigation.navigate('PokemonDetails', {id: pokemon.id});
            }}
          />
        )}
        ListFooterComponent={renderLoadingFooter}
        onEndReached={loadNextPokemons}
        onEndReachedThreshold={0.3}
        onScroll={onScrollEvent({y: scrollY})}
        scrollEventThrottle={1}
      />
    </Container>
  );
};

export default PokedexList;
