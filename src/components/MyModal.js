/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class MyModal extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}>
          <Text style={{color: 'white'}}>Open modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'red', padding: 10, marginTop: 30}}>
          <Text style={{color: 'white'}}>Close modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
