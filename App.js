/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Box />
        {/* <Form /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
