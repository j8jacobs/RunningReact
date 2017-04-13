import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

import * as firebase from "firebase";


const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
});

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
        response: ""
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(name) {
    this.props.navigator.pop();
    /*this.props.navigator.push({
      screen_name
    });*/
  }
  signup() {
    this.setState({response: "Logged In!"});
  }



  render() {
    return(
      <View style={styles.form_container}>
        <Text>Name (Sorry, it won't be remembered at this time)</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          editable={true}
          placeholder="John Doe"
          placeholderTextColor="gray"
      />
        <View style={{padding:10}}></View>

        <Text>Email</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        editable={true}
        placeholder="email@email.edu"
        placeholderTextColor="gray"
        />
        <View style={{padding:10}}></View>

        <Text>Password</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        editable={true}
        placeholder="@w$umP@$$"
        placeholderTextColor="gray"
        secureTextEntry={true}
        />
        <View style={{padding:20}}></View>

        <Button
          onPress={ () => this.setState({response: "Logged In!"})}
          title="Submit (Test, see Response)"
          style={{alignItems:'center'}}
          />
          <View style={{padding:20}}></View>
          <Button
            onPress={() => this.navigate('Login')}
            title="Go to Login Screen"
            style={{alignItems:'center'}}
            />

            <View style={{padding:50}}>
              <Text>Response: {this.state.response}</Text>
            </View>

      </View>
    );
  }
}

module.exports = Register;
