/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            marginTop: 50,
            marginLeft: 10,
            color: 'darkseagreen',
            fontSize: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          View 1
        </Text>
      </View>
    );
  }
}
