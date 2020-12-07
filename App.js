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

const defaultState = {
  words: [
    {id: 1, en: 'One', vn: 'Một', isMemorized: true},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
    {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
  ],
  shouldShowForm: false,
  filterMode: '',
};
const store = createStore((state = defaultState, action) => {
  switch (action.type) {
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
          <Main />
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
