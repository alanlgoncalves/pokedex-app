import React from 'react';
import {Container, EllipseImage, MenuText, PokeballImage} from './styles';
import ellipseButtonBackground from '../../assets/images/buttons/ellipse.png';
import pokeballButtonBackground from '../../assets/images/buttons/pokeball-background.png';
import {TouchableOpacityProps} from 'react-native';

interface MenuItemProps extends TouchableOpacityProps {
  color: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({color, text, onPress}) => {
  return (
    <Container color={color} onPress={onPress}>
      <EllipseImage source={ellipseButtonBackground} />
      <MenuText>{text}</MenuText>
      <PokeballImage source={pokeballButtonBackground} />
    </Container>
  );
};

export default MenuItem;
