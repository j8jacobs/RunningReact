import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import LandingScreen from '../screens/LandingScreen';

export const Root = StackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  LandingScreen: {
    screen: LandingScreen,
  }
}, {
    mode: 'modal',
    headerMode: 'none',
  }); //this modal no header looks much better in ios
