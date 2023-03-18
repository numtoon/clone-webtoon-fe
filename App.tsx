import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './pages/navigation/tabNavigation';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabNavgator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
