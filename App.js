/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Main from './src/screens/Main';
import Box from './src/components/Box';
import Form from './src/components/Form';
import Filter from './src/components/Filter';
import Word from './src/components/Word';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
];

function wordReducer(state = defaultWords, action) {
  let newWords = null;
  switch (action.type) {
    case 'TOGGLE_WORD':
      newWords = state.map((item) => {
        if (item.id === action.id) {
          const newWord = {
            ...item,
            isMemorized: !item.isMemorized,
          };
          return newWord;
        }
        return item;
      });
      return newWords;
  }
  return state;
}
function filterModeReducer(state = '', action) {
  return state;
}

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

const store = createStore(rootReducer);

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

// (state = defaultState, action) => {

//     case 'REMOVE_WORD':
//       newWords = state.words.filter((item) => {
//         if (item.id === action.id) {
//           return false;
//         }
//         return true;
//       });
//       return {...state, words: newWords};
//     case 'ADD_WORD':
//       const {words} = state;
//       newWords = Object.assign([], words);
//       const newWord = {
//         id: words.length + 1,
//         en: action.txtEn,
//         vn: action.txtVn,
//         isMemorized: false,
//       };
//       newWords.unshift(newWord);
//       return {...state, words: newWords};
//     case 'SET_FILTER_MODE':
//       return {...state, filterMode: action.filterMode};
//     default:
//       return state;
//   }
// }
