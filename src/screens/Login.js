import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class Login extends Component {

  render() {
    return (
      <Text> Login Screen </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
});

export default Login;
