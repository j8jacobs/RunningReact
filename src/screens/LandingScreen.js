import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class LandingScreen extends Component {
  constructor() {
    super()

    this.state = {
      response: ""
    }

    this.navigate = this.navigate.bind(this);
  }
  navigate(name) {
    this.props.navigator.push({
      name
    })
  }


  render() {
    return(
      <View style={styles.container}>
        <Text>Made it to the landing screen!</Text>
        <Button
          onPress={() => this.navigate('Login')}
          title="Logout"
          />

      </View>
    );
  }
}

export default LandingScreen;
