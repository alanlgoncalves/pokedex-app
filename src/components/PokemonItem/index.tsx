import React, {useMemo} from 'react';
import {
  Container,
  PokeballImage,
  PokemonName,
  PokemonNumber,
  PokemonInfo,
  PokemonTypes,
  PokemonType,
  PokemonTypeText,
  PokemonImage,
} from './styles';
import {TouchableOpacityProps} from 'react-native';
import pokeballButtonBackground from '../../assets/images/background/pokemon-item/pokeball-backgroung.png';

import {TypeConfig, typeConfig} from '../../config/types';

interface PokemonItemProps extends TouchableOpacityProps {
  id: string;
  name: string;
  image: string;
  types: string[];
}

const PokemonItem: React.FC<PokemonItemProps> = ({
  id,
  name,
  image,
  types,
  onPress,
}) => {
  const typeConfiguration = useMemo((): TypeConfig => {
    const typeConfiguration = typeConfig.find(
      (typeConfiguration) => typeConfiguration.type === types[0],
    );

    if (!typeConfiguration) {
      return typeConfig[0];
    }

    return typeConfiguration;
  }, [types]);

  return (
    <Container color={typeConfiguration.color} onPress={onPress}>
      <PokeballImage source={pokeballButtonBackground} />

      <PokemonName>{name}</PokemonName>
      <PokemonNumber color={typeConfiguration.color}>{`#${id}`}</PokemonNumber>

      <PokemonInfo>
        <PokemonTypes>
          {types.map((type) => (
            <PokemonType color={typeConfiguration.color}>
              <PokemonTypeText>{type}</PokemonTypeText>
            </PokemonType>
          ))}
        </PokemonTypes>

        <PokemonImage source={{uri: image}} />
      </PokemonInfo>
    </Container>
  );
};

export default PokemonItem;
