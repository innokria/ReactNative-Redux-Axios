import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from '../../components/common/Icon';

import HomeScreen from '../../components/screens/Camera';

const HomeNavigator1 = createStackNavigator({
  Home1: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Camera',
      headerTitleStyle: Platform.select({
        android: {
          flex: 1,
          textAlign: 'center',
        },
      }),
      headerLeft: null,
      headerRight: null,
    },
  },
});

const HomeIcon1 = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home-outline" size={40} color={tintColor} />
  ),
};

export { HomeNavigator1, HomeIcon1 };
