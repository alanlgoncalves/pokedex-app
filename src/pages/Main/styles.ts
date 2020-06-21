import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

export const FormContainer = styled.View`
  flex: 0.7;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border-radius: 35px;
`;

export const PokemonBackgroundImage = styled.Image`
  position: absolute;
  right: 0;
  top: 0;
`;

export const TitleText = styled.Text`
  font-family: 'CircularStd-Black';
  font-size: 30px;
  line-height: 42px;
  color: #303943;
  margin-top: 120px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 85%;
  background: #f5f5f5;
  border-radius: 100px;
  margin-top: 30px;
`;

export const SearchIcon = styled(Icon)`
  flex: 0.1;
`;

export const SearchInput = styled.TextInput`
  flex: 0.7;

  font-family: 'CircularStd-Book';
  font-size: 14px;
`;

export const MenuContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 20px;
`;

export const NewsContainer = styled.View`
  flex: 0.3;
  background-color: #e5e5e5;
  opacity: 0.4;
`;
