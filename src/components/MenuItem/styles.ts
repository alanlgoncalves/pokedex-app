import styled from 'styled-components/native';

interface MenuItemProps {
  color: string;
}

export const Container = styled.TouchableOpacity<MenuItemProps>`
  flex: 0.5;
  justify-content: center;

  height: 60px;
  min-width: 155px;
  background: ${(props) => props.color};
  border-radius: 15px;
  margin: 5px;
  shadow-color: rgba(0, 0, 0, 0.15);
  shadow-opacity: 0.8;
  elevation: 12;
  shadow-radius: 15px;
  shadow-offset : {
    width: 1;
    height: 13;
  }
`;

export const MenuText = styled.Text`
  font-family: 'CircularStd-Bold';
  color: #fff;
  font-size: 14px;
  margin-left: 25px;
`;

export const EllipseImage = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
`;

export const PokeballImage = styled.Image`
  position: absolute;
  top: 0;
  right: 0;

  border-radius: 15px;
`;
