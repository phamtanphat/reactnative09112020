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
  onShowModal = () => {
    this.setState({modalVisible: true});
  };
  onHideModal = () => {
    this.setState({modalVisible: false});
  };
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}>
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
              width: 270,
              height: 150,
              backgroundColor: 'whitesmoke',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 25,
              }}>
              Bạn muốn xoá từ vựng này không?
            </Text>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <TouchableOpacity
                onPress={() => this.onListenModal(0)}
                style={{
                  backgroundColor: 'red',
                  padding: 10,
                  marginRight: 30,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>Đồng ý</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.onListenModal(1)}
                style={{
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>Huỷ bỏ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
