/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';

export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Modal visible={this.state.modalVisible}>
          <View style={{flex: 1}}>
            <Text>Hộp thoại</Text>
          </View>
        </Modal>
        <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}>
          <Text style={{color: 'white'}}>Open modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
