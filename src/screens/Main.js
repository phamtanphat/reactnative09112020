import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppDimensions from '../helpers/AppDimensions';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: AppDimensions.getWidth() / 10}}> textInComponent </Text>
      </View>
    );
  }
}
