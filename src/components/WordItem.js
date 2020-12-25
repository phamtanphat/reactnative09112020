/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

export default class WordItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.item.ismemorized === this.props.item.ismemorized &&
      nextProps.filterMode === this.props.filterMode &&
      nextState.modalVisible === this.state.modalVisible
    ) {
      return false;
    }
    return true;
  }
  renderItemWord = (word, filterMode) => {
    if (filterMode === 'Show_Forgot' && !word.ismemorized) {
      return null;
    } else if (filterMode === 'Show_Memorized' && word.ismemorized) {
      return null;
    }
    return (
      <View>
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
                  onPress={() => this.props.onRemoveWord(word._id)}
                  style={{
                    backgroundColor: 'red',
                    padding: 10,
                    marginRight: 30,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white'}}>Đồng ý</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.toggleModal()}
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
        <View style={styles.containerWord} key={word._id.toString()}>
          <View style={styles.containerText}>
            <Text style={styles.textEn}>{word.en}</Text>
            <Text style={styles.textVn}>
              {word.ismemorized ? '----' : word.vn}
            </Text>
          </View>
          <View style={styles.containerTouchable}>
            <TouchableOpacity
              onPress={() =>
                this.props.onToggleWord(word._id, !word.ismemorized)
              }
              style={{
                ...styles.touchableMemorized,
                backgroundColor: word.ismemorized ? '#28a845' : '#DD3444',
              }}>
              <Text style={styles.textSize}>
                {word.ismemorized ? 'Forgot' : 'Memorized'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleModal()}
              style={styles.touchableRemove}>
              <Text style={styles.textSize}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  render() {
    return this.renderItemWord(this.props.item, this.props.filterMode);
  }
}

const styles = StyleSheet.create({
  containerWord: {
    flexDirection: 'column',
    height: AppDimensions.getHeight() / 7,
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textEn: {
    color: '#28a845',
    fontSize: AppDimensions.getWidth() / 20,
  },
  textVn: {
    color: '#dd3545',
    fontSize: AppDimensions.getWidth() / 20,
  },
  containerTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  touchableMemorized: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#28a845',
  },
  textSize: {
    fontSize: AppDimensions.getWidth() / 20,
  },
  touchableRemove: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFC106',
  },
  containerTextInput: {
    width: '100%',
    height: 150,
    justifyContent: 'space-evenly',
  },
});
