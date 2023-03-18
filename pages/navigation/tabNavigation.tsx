import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './homeNavigation';
import MyNavigator from './myNavigation';
//import {NavigationContainer} from '@react-navigation/native';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Group>
          <Tab.Screen name="Webtoon" component={HomeNavigator} />
          <Tab.Screen name="My" component={MyNavigator} />
        </Tab.Group>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
