import styled from 'styled-components/native';
import {Pokemon} from '../../pages/PokedexList';
import {shade} from 'polished';

interface MenuItemProps {
  color: string;
}

interface PokemonNumberProps {
  color: string;
}

export const Container = styled.TouchableOpacity<MenuItemProps>`
  flex: 1;
  flex-direction: column;

  height: 110px;
  min-width: 155px;
  background: ${(props) => props.color};
  border-radius: 15px;
  margin: 5px;
  padding: 0px 10px;

  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-opacity: 0.8;
  elevation: 12;
  shadow-radius: 15px;
  shadow-offset : {
    width: 1;
    height: 13;
  }
`;

export const PokeballImage = styled.Image`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const PokemonName = styled.Text`
  font-family: 'CircularStd-Bold';
  color: #fff;
  font-size: 16px;
  margin-top: 5px;
`;

export const PokemonNumber = styled.Text<PokemonNumberProps>`
  position: absolute;
  top: 5px;
  right: 10px;

  font-family: 'CircularStd-Bold';
  color: ${(props) => shade(0.3, props.color)};
  font-size: 16px;
`;

export const PokemonInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
`;

export const PokemonTypes = styled.View`
  align-items: flex-start;
`;

export const PokemonType = styled.View`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 3px;
  margin-top: 6px;
  text-align: center;
  padding: 3px 8px;
`;

export const PokemonTypeText = styled.Text`
  font-family: 'CircularStd-Book';
  color: #fff;
  font-size: 14px;
`;

export const PokemonImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: -20px;
  margin-right: -10px;
`;
