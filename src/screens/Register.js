import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

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
  handleMoveToLogin = () => {
    console.log('Moving to Login Screen');
    this.props.navigation.navigate('Login');
  };

  render() {
    return(
      <View style={styles.form_container}>
        <Text>Name</Text>
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
          onPress={this.handleMoveToLogin}
          title="Submit"
          style={{alignItems:'center'}}
          />

      </View>
    );
  }
}

export default Register;
