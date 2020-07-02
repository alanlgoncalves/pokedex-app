import React, {useCallback, useEffect} from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  Header,
  PokemonResumeContainer,
  PokemonNameTitle,
  PokemonNumber,
  PokemonTypeContainer,
  PokemonType,
  PokemonTypeText,
  PokemonImage,
  PokemonDetailsContainer,
  PokemonTabView,
  PokemonTab,
  PokemonTabContainer,
  PokemonDescriptionText,
  PokemonHeightWeightContainer,
  PokemonHeightWeightSection,
  PokemonHeightWeightTitleText,
  PokemonHeightWeightInfoText,
  TabTitleText,
  PokemonEvolutionContainer,
  PokemonEvolutionSection,
  PokemonEvolutionImage,
  PokemonEvolutionArrowIcon,
  PokemonEvolutionLevelText,
  PokemonEvolutionNameText,
  BaseStatsLabelSection,
  BaseStatusLabelText,
  BaseStatusValueSection,
  BaseStatusValueText,
  BaseStatusBarSection,
  BaseStatsBar,
  BaseStatsBarIncomplete,
} from './styles';
import logo from '../../assets/images/background/pages/pokeball-background.png';
import {PokemonBackgroundImage} from '../Main/styles';
import {useNavigation} from '@react-navigation/native';
import {SceneMap} from 'react-native-tab-view';
import {Dimensions, StatusBar, View} from 'react-native';

export interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
}

const renderTabBar = (props) => (
  <PokemonTab
    {...props}
    removeClippedSubviews={true}
    indicatorStyle={{backgroundColor: '#6C79DB'}}
    labelStyle={{color: '#000', fontSize: 11, fontFamily: 'CircularStd-Book'}}
    style={{backgroundColor: '#fff'}}
  />
);

const About = () => (
  <PokemonTabContainer>
    <PokemonDescriptionText>
      Bulbasaur can be seen napping in bright sunlight. There is a seed on its
      back. By soaking up the sun's rays, the seed grows progressively larger.
    </PokemonDescriptionText>

    <PokemonHeightWeightContainer>
      <PokemonHeightWeightSection>
        <PokemonHeightWeightTitleText>Height</PokemonHeightWeightTitleText>
        <PokemonHeightWeightInfoText>
          2’3.6” (0.70 cm)
        </PokemonHeightWeightInfoText>
      </PokemonHeightWeightSection>
      <PokemonHeightWeightSection>
        <PokemonHeightWeightTitleText>Weight</PokemonHeightWeightTitleText>
        <PokemonHeightWeightInfoText>
          15.2 lbs (6.9 kg)
        </PokemonHeightWeightInfoText>
      </PokemonHeightWeightSection>
    </PokemonHeightWeightContainer>
  </PokemonTabContainer>
);

const BaseStats = () => (
  <PokemonTabContainer>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>HP</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>45</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={45} />
          <BaseStatsBarIncomplete value={45} />
        </View>
      </BaseStatusBarSection>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>Atack</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>60</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={60} />
          <BaseStatsBarIncomplete value={60} />
        </View>
      </BaseStatusBarSection>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>Defense</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>48</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={48} />
          <BaseStatsBarIncomplete value={48} />
        </View>
      </BaseStatusBarSection>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>Sp. Atk</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>65</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={65} />
          <BaseStatsBarIncomplete value={65} />
        </View>
      </BaseStatusBarSection>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>Sp. Def</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>65</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={65} />
          <BaseStatsBarIncomplete value={65} />
        </View>
      </BaseStatusBarSection>
    </View>
    <View
      style={{
        flexDirection: 'row',
      }}>
      <BaseStatsLabelSection>
        <BaseStatusLabelText>Speed</BaseStatusLabelText>
      </BaseStatsLabelSection>
      <BaseStatusValueSection>
        <BaseStatusValueText>45</BaseStatusValueText>
      </BaseStatusValueSection>
      <BaseStatusBarSection>
        <View style={{flexDirection: 'row', flex: 1}}>
          <BaseStatsBar value={45} />
          <BaseStatsBarIncomplete value={45} />
        </View>
      </BaseStatusBarSection>
    </View>
  </PokemonTabContainer>
);

const Evolution = () => (
  <PokemonTabContainer>
    <TabTitleText>Evolution Chain</TabTitleText>

    <PokemonEvolutionContainer>
      <PokemonEvolutionSection>
        <PokemonEvolutionImage
          source={{
            uri:
              'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          }}
        />
        <PokemonEvolutionNameText>Bulbasaur</PokemonEvolutionNameText>
      </PokemonEvolutionSection>
      <PokemonEvolutionSection>
        <PokemonEvolutionArrowIcon name="arrow-right" />
        <PokemonEvolutionLevelText>Lv 16</PokemonEvolutionLevelText>
      </PokemonEvolutionSection>
      <PokemonEvolutionSection>
        <PokemonEvolutionImage
          source={{
            uri:
              'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
          }}
        />
        <PokemonEvolutionNameText>Ivysaur</PokemonEvolutionNameText>
      </PokemonEvolutionSection>
    </PokemonEvolutionContainer>
    <PokemonEvolutionContainer>
      <PokemonEvolutionSection>
        <PokemonEvolutionImage
          source={{
            uri:
              'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
          }}
        />
        <PokemonEvolutionNameText>Ivysaur</PokemonEvolutionNameText>
      </PokemonEvolutionSection>
      <PokemonEvolutionSection>
        <PokemonEvolutionArrowIcon name="arrow-right" />
        <PokemonEvolutionLevelText>Lv 34</PokemonEvolutionLevelText>
      </PokemonEvolutionSection>
      <PokemonEvolutionSection>
        <PokemonEvolutionImage
          source={{
            uri:
              'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
          }}
        />
        <PokemonEvolutionNameText>Venusaur</PokemonEvolutionNameText>
      </PokemonEvolutionSection>
    </PokemonEvolutionContainer>
  </PokemonTabContainer>
);

const Moves = () => (
  <PokemonTabContainer>
    <PokemonDescriptionText>Moves</PokemonDescriptionText>
  </PokemonTabContainer>
);

const renderScene = SceneMap({
  about: About,
  base_stats: BaseStats,
  evolution: Evolution,
  moves: Moves,
});

const initialLayout = {width: Dimensions.get('window').width - 40};

const PokemonDetails: React.FC = () => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'about', title: 'About'},
    {key: 'base_stats', title: 'Base Stats'},
    {key: 'evolution', title: 'Evolution'},
    {key: 'moves', title: 'Moves'},
  ]);

  const handleGoBack = useCallback(() => {
    console.log('Foi');
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    //loadPokemon();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#48D0B0" />
      <Container color="#48D0B0">
        <PokemonBackgroundImage source={logo} />

        <Header>
          <BackButton onPress={handleGoBack}>
            <BackButtonIcon name="arrow-left" size={18} />
          </BackButton>
        </Header>

        <PokemonResumeContainer>
          <PokemonNameTitle>Bulbasaur</PokemonNameTitle>
          <PokemonNumber>#001</PokemonNumber>
        </PokemonResumeContainer>

        <PokemonTypeContainer>
          <PokemonType>
            <PokemonTypeText>Grass</PokemonTypeText>
          </PokemonType>
          <PokemonType>
            <PokemonTypeText>Poison</PokemonTypeText>
          </PokemonType>
        </PokemonTypeContainer>

        <PokemonImage
          source={{
            uri:
              'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
          }}
        />

        <PokemonDetailsContainer>
          <PokemonTabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </PokemonDetailsContainer>
      </Container>
    </>
  );
};

export default PokemonDetails;
