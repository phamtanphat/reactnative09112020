/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView1}>View 1</Text>
        <Text style={styles.textView2}>View 2</Text>
        <Text style={styles.textView3}>View 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  textView1: {
    flex: 1,
    backgroundColor: 'rgb(100,200,210)',
  },
  textView2: {
    flex: 1,
    backgroundColor: 'rgb(120,130,140)',
  },
  textView3: {
    flex: 1,
    backgroundColor: 'rgb(140,150,160)',
  },
});
