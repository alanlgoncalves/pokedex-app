import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';

import {TabBar, TabView} from 'react-native-tab-view';

import {Dimensions} from 'react-native';

interface ContainerProps {
  color: string;
}

interface BaseStatsProps {
  value: number;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${(props) => props.color};
  padding-top: ${isIphoneX() ? getStatusBarHeight() + 30 : 20}px;
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
  height: 25px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  font-size: 20px;
`;

export const BackButtonIcon = styled(Icon)`
  color: #fff;
`;

export const HeaderTitle = styled(Animated.Text)`
  font-family: 'CircularStd-Black';
  color: #fff;
  font-size: 25px;
  text-align: center;
`;

export const PokemonResumeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 34px;
  padding: 0 20px;
`;

export const PokemonNameTitle = styled.Text`
  font-family: 'CircularStd-Black';
  color: #fff;
  font-size: 36px;
  line-height: 38px;
`;

export const PokemonNumber = styled.Text`
  font-family: 'CircularStd-Black';
  color: #fff;
  font-size: 18px;
  line-height: 23px;
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  padding: 0 20px;
`;

export const PokemonType = styled.View`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 38px;
  padding: 3px;
  margin: 6px 5px;
  text-align: center;
  padding: 3px 12px;
`;

export const PokemonTypeText = styled.Text`
  font-family: 'CircularStd-Book';
  color: #fff;
  font-size: 18px;
`;

export const PokemonImage = styled.Image`
  align-self: center;

  width: 234px;
  height: 234px;
  z-index: 1;
  margin-bottom: -45px;
`;

export const PokemonDetailsContainer = styled.View`
  flex: 1;

  background: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const PokemonTab = styled(TabBar)`
  elevation: 0;
`;

export const PokemonTabView = styled(TabView)`
  padding: 30px 20px 0;
`;

export const PokemonTabContainer = styled.ScrollView`
  margin-top: 20px;
  width: ${Dimensions.get('window').width - 40}px;
`;

export const PokemonDescriptionText = styled.Text`
  font-family: 'CircularStd-Book';
  color: #303943;
  font-size: 14px;
  line-height: 24px;
  text-align: justify;
`;

export const PokemonHeightWeightContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;

  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-opacity: 0.7;
  shadow-radius: 8px;
`;

export const PokemonHeightWeightSection = styled.View``;

export const PokemonHeightWeightTitleText = styled.Text`
  font-family: 'CircularStd-Book';
  font-size: 14px;
  line-height: 28px;
  color: #303943;
  opacity: 0.4;
  margin-bottom: 5px;
`;

export const PokemonHeightWeightInfoText = styled.Text``;

export const TabTitleText = styled.Text`
  font-family: 'CircularStd-Bold';
  font-size: 16px;
  line-height: 28px;
  color: #303943;
`;

export const PokemonEvolutionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 0 20px;
  margin: 15px 0;
`;

export const PokemonEvolutionSection = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PokemonEvolutionImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const PokemonEvolutionArrowIcon = styled(Icon)`
  font-size: 20px;
  color: #dadada;
`;

export const PokemonEvolutionLevelText = styled.Text`
  font-family: 'CircularStd-Bold';
  font-size: 12px;
  line-height: 24px;
  color: #303943;
`;

export const PokemonEvolutionNameText = styled.Text``;

export const BaseStatsLabelSection = styled.View`
  flex: 0.2;
`;

export const BaseStatusLabelText = styled.Text`
  font-family: 'CircularStd-Book';
  font-size: 14px;
  line-height: 28px;
  color: #303943;
  opacity: 0.6;
`;

export const BaseStatusValueSection = styled.View`
  flex: 0.1;
`;

export const BaseStatusValueText = styled.Text`
  font-family: 'CircularStd-Book';
  font-size: 14px;
  line-height: 28px;
  color: #303943;
  opacity: 0.6;
`;

export const BaseStatusBarSection = styled.View`
  flex: 0.7;
`;

export const BaseStatsBar = styled.View<BaseStatsProps>`
  background-color: ${(props) => (props.value >= 50 ? '#4BC07A' : '#FB6C6C')};
  width: ${(props) => props.value}%;
  height: 3px;
  align-self: center;
`;

export const BaseStatsBarIncomplete = styled.View<BaseStatsProps>`
  background-color: #f4f5f4;
  width: ${(props) => 100 - props.value}%;
  height: 2px;
  opacity: 0.9;
  align-self: center;
`;
