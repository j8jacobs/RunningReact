import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';

export const Root = StackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  }
}, {
    mode: 'modal',
    headerMode: 'none',
  }); //this modal no header looks much better in ios
