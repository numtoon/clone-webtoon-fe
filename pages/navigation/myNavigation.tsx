import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NaviHeaderLogo from '../../src/components/navigationHeader/NaviHeaderLogo';
import MyScreen from '../screens/my';

const MyNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyScreen"
        component={MyScreen}
        options={{
          headerTitle: () => <NaviHeaderLogo />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNavigator;
