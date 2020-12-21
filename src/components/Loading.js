/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {DotIndicator} from 'react-native-indicators';

export default class Loading extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(256,256,256,0.5)',
          ...this.props.styles,
        }}>
        <DotIndicator color="blue" count={3} size={10} />
      </View>
    );
  }
}
