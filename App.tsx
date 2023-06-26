/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import ProdectItem from './components/ProdectItem';
const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="prodectIrem" component={ProdectItem} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
