/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';
import {createStore} from 'redux';

const store = createStore(function (state = {count: 1}, action) {
  if (action.type === 'INCREASE') {
    return {count: action.data + state.count};
  }
  return state;
});

console.log(store.getState());
store.dispatch({type: 'INCREASE', data: 1});
console.log(store.getState());

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Box /> */}
        {/* <Form /> */}
        <Main />
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
