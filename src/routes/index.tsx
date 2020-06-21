import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Pokemons from '../pages/PokedexList';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Main" component={Main} />
      <App.Screen name="PokemonsList" component={Pokemons} />
    </App.Navigator>
  );
};

export default AppRoutes;
