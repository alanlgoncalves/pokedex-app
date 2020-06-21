import React, {useCallback} from 'react';

import {
  Container,
  FormContainer,
  PokemonBackgroundImage,
  TitleText,
  SearchContainer,
  SearchIcon,
  SearchInput,
  MenuContainer,
  NewsContainer,
} from './styles';

import logo from '../../assets/images/background/pages/pokeball-background.png';
import MenuItem from '../../components/MenuItem';
import {useNavigation} from '@react-navigation/native';

const Main: React.FC = () => {
  const navigation = useNavigation();

  const handleOpenPage = useCallback((page: string) => {
    navigation.navigate(page);
  }, []);

  return (
    <Container>
      <FormContainer>
        <PokemonBackgroundImage source={logo} />
        <TitleText>What Pokemon {'\n'} are you looking for?</TitleText>

        <SearchContainer>
          <SearchIcon name="search" size={18} />
          <SearchInput placeholder="Search Pokemon, Move, Ability etc" />
        </SearchContainer>

        <MenuContainer>
          <MenuItem
            color="#4FC1A6"
            text="Pokedex"
            onPress={() => handleOpenPage('PokemonsList')}
          />
          <MenuItem color="#F7786B" text="Moves" />
          <MenuItem color="#77C4FE" text="Abilities" />
          <MenuItem color="#F6C747" text="Items" />
          <MenuItem color="#7C538C" text="Location" />
          <MenuItem color="#B1736C" text="Type Charts" />
        </MenuContainer>
      </FormContainer>
      <NewsContainer></NewsContainer>
    </Container>
  );
};

export default Main;
