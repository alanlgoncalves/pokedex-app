import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e5e5;
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 30 : 0}px;
`;

export const PokemonBackgroundImage = styled.Image`
  position: absolute;
  right: 0;
  top: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;

  color: #303943;
  font-size: 20px;
`;

export const BackButtonIcon = styled(Icon)``;

export const HeaderTitle = styled(Animated.Text)`
  font-family: 'CircularStd-Black';
  color: #303943;
  font-size: 25px;
  text-align: center;
`;

export const PageTitle = styled(Animated.Text)`
  font-family: 'CircularStd-Black';
  color: #303943;
  font-size: 30px;
  line-height: 38px;
  margin-top: 34px;
  margin-left: 20px;
`;

export const PokemonsList = styled(Animated.createAnimatedComponent(FlatList))`
  padding: 10px 5px;
`;
