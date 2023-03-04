import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './pages/navigation/home';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default App;
