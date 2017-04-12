import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  StyleSheet,
} from 'react-native';

class Login extends Component {

  handleRegister = () => {
    console.log('Moving to Register Screen');
    this.props.navigation.navigate('Register');
  };
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('../resources/images/vector-smart-object.png')}/>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              editable={true}
              placeholder="email"
              placeholderTextColor="gray"
            />
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              editable={true}
              placeholder="password"
              placeholderTextColor="gray"
            />
            <Button
              onPress={() => console.log('Attempted Login')}
              title="Login"
            />
            <View style={{height: 20}}>
            </View>
            <Button
              onPress={this.handleRegister}
              title="New User?"
            />
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

export default Login;
