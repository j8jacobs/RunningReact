import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Alert,
} from 'react-native';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import LandingScreen from './src/screens/LandingScreen';

export default class Initial extends Component {
  constructor() {
    super()

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    if(route.name === 'Login') {
      return <Login navigator={navigator} />
    } else if(route.name === 'LandingScreen') {
      return <LandingScreen navigator={navigator} />
    } else if(route.name === 'Register') {
      return <Register navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        />
    );
  }
}

AppRegistry.registerComponent('RunningReact', () => Initial);
