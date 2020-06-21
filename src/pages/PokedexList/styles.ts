import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native';
import {Pokemon} from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e5e5e5;
`;

export const PokemonBackgroundImage = styled.Image`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Header = styled.View`
  margin: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  color: #303943;
  font-size: 20px;
`;

export const BackButtonIcon = styled(Icon)``;

export const PageTitle = styled.Text`
  font-family: 'CircularStd-Black';
  color: #303943;
  font-size: 30px;
  line-height: 38px;
  margin-top: 34px;
`;

export const PokemonsList = styled(FlatList as new () => FlatList<Pokemon>)`
  padding: 32px 24px;
`;
