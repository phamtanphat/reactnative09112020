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
  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Modal transparent={true} visible={this.state.modalVisible}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                borderRadius: 5,
                borderBottomColor: 'blue',
                borderColor: 'black',
                width: 300,
                height: 300,
                backgroundColor: 'whitesmoke',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hộp thoại</Text>
              <TouchableOpacity
                onPress={this.toggleModal}
                style={{backgroundColor: 'green', padding: 10}}>
                <Text style={{color: 'white'}}>Close modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={this.toggleModal}
          style={{backgroundColor: 'green', padding: 10}}>
          <Text style={{color: 'white'}}>Open modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
