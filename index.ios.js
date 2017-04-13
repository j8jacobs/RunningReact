import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Alert,
} from 'react-native';

import * as firebase from "firebase";
import Firebase from './src/config/Firebase';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import LandingScreen from './src/screens/LandingScreen';

export default class Initial extends Component {
  constructor() {
    super()

    Firebase.initialise();

    this.getInitialView();

    this.state = {
      userLoaded: false,
      initialView: null
    }

    this.getInitialView = this.getInitialView.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? 'LandingScreen' : 'Login';

      this.setState({
        userLoaded: true,
        initialView: initialView
      });
    }
  );
  }

  renderScene(route, navigator) {
    /*switch(route.name) {
      case "Login":
        return (<Login navigator={navigator} />);
        break;

      case "Register":
        return (<Register navigator={navigator} />);
        break;

      case "LandingScreen":
        return (<LandingScreen navigator={navigator} />);
        break;
    }*/
    if(route.name === 'Login') {
      return <Login navigator={navigator} />
    } else if(route.name === 'LandingScreen') {
      return <LandingScreen navigator={navigator} />
    } else if(route.name === 'Register') {
      return <Register navigator={navigator} />
    }
  }

  render() {
    if(this.state.userLoaded) {
    return (
      <Navigator
        initialRoute={{name: this.state.initialView}}
        renderScene={this.renderScene}
        />
    );
  } else {
      return null;
    }
  }
}

AppRegistry.registerComponent('RunningReact', () => Initial);
