/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

export default class WordItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.item.ismemorized === this.props.item.ismemorized &&
      nextProps.filterMode === this.props.filterMode
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
      <View style={styles.containerWord} key={word._id.toString()}>
        <View style={styles.containerText}>
          <Text style={styles.textEn}>{word.en}</Text>
          <Text style={styles.textVn}>
            {word.ismemorized ? '----' : word.vn}
          </Text>
        </View>
        <View style={styles.containerTouchable}>
          <TouchableOpacity
            onPress={() => this.props.onToggleWord(word._id, !word.ismemorized)}
            style={{
              ...styles.touchableMemorized,
              backgroundColor: word.ismemorized ? '#28a845' : '#DD3444',
            }}>
            <Text style={styles.textSize}>
              {word.ismemorized ? 'Forgot' : 'Memorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.onRemoveWord(word._id)}
            style={styles.touchableRemove}>
            <Text style={styles.textSize}>Remove</Text>
          </TouchableOpacity>
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
