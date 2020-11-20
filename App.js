/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textView1}>View 1</Text>
        <Text style={styles.textView2}>View 2</Text>
        <Text style={styles.textView3}>View 3</Text>
        <Text style={styles.textView4}>View 4</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  textView1: {
    backgroundColor: 'rgb(100,200,210)',
  },
  textView2: {
    backgroundColor: 'rgb(120,130,140)',
  },
  textView3: {
    backgroundColor: 'rgb(140,150,160)',
  },
  textView4: {
    backgroundColor: 'rgb(150,160,170)',
  },
});
