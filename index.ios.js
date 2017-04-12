/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class RunningReact extends Component {
  render() {
    return (


      <View style={styles.container}>

        <Image source={require('./src/resources/images/vector-smart-object.png')}/>
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
              onPress={() => console.log('Attempted Register')}
              title="New User?"
              />



      </View>
      /*
      <TouchableHighlight underlayColor={"#E8E8E8"} onPress={console.log('User Attempts to login')}>
        <View>
          <Text style={{color:'blue'}}> Login </Text>
        </View>
      </TouchableHighlight>
      */
//<View>
//      <Image source={require('./app/resources/images/stick_shift_display.png')} />
//</View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo_image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 49,
  },
  login_input: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('RunningReact', () => RunningReact);
