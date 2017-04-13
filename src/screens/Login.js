import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

import * as firebase from "firebase";


class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      response: ""

    }

    this.navigate = this.navigate.bind(this);
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  login() {
    console.log('filler');
  }

  render() {
    return (
        <View style={styles.container}>
          <Image source={require('../resources/images/vector-smart-object.png')}/>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              editable={true}
              placeholder="email"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              editable={true}
              placeholder="password"
              placeholderTextColor="gray"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <Button
              onPress={() => this.navigate('LandingScreen')}
              title="Login"
            />
            <View style={{height: 20}}>
            </View>
            <Button
              onPress={() => this.navigate('Register')}
              title="New User?"
            />
            <View style={{height: 40}}>
              <Text>Response: {this.state.response}</Text>
            </View>
        </View>
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

module.exports = Login;
