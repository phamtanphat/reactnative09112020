/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>View 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginTop: 50,
    marginLeft: 10,
    color: 'darkseagreen',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'black',
  },
});
