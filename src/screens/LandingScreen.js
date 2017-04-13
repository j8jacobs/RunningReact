import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'

import * as firebase from "firebase";


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

    this.logout = this.logout.bind(this);
    this.navigate = this.navigate.bind(this);
  }
  async logout() {

      try {

          await firebase.auth().signOut();

          this.props.navigator.push({
              name: "Login"
          })

      } catch (error) {
          console.log(error);
          this.setState({
            response: error.toString()
          })
      }

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
          onPress={this.logout}
          title="Logout"
          />
          <Text>{this.state.response}</Text>
      </View>
    );
  }
}

export default LandingScreen;
