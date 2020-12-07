/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = {count: 10}, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {count: state.count + 1};
    case 'DECREASE':
      return {count: state.count - 1};
    case 'RESET':
      return {count: 0};
    default:
      return state;
  }
});

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Box /> */}
        {/* <Form /> */}
        <Provider store={store}>
          <Box />
        </Provider>
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
