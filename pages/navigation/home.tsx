import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';

const HeaderLeft = () => {
  return (
    <Image
      source={require('WebtoonProject/public/images/home/cookie.png')}
      style={{height: 40, width: 40, resizeMode: 'contain'}}
    />
  );
};

const HeaderRight = () => {
  return (
    <Image
      source={require('WebtoonProject/public/images/home/search-icon.png')}
      style={{height: 28, width: 28, resizeMode: 'contain'}}
    />
  );
};

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="홈"
        options={{
          headerLeft: () => <HeaderLeft />,
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRight: () => <HeaderRight />,
          headerRightContainerStyle: {paddingRight: 10},
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
