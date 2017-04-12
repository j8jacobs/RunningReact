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
  handleLogout = () => {
    console.log('User Logged out from Landing Screen');
    this.props.navigation.navigate('Login');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>Made it to the landing screen!</Text>
        <Button
          onPress={this.handleLogout}
          title="Logout"
          />

      </View>
    );
  }
}

export default LandingScreen;
