import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import NaviHeaderLogo from '../../src/components/navigation/NaviHeaderLogo';
import {NavigationContainer} from '@react-navigation/native';

// Header는 서비스 내의 화면 이동 > Navigator로 stack구조 screen 쌓기
const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => <NaviHeaderLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
