import actionTypes from './actionTypes';
import Axios from 'axios';

const URL = 'https://servertuvung09112020.herokuapp.com/';

function addWord(txtEn, txtVn) {
  return {type: actionTypes.ACTION_TYPE_ADD_WORD, txtEn, txtVn};
}

function toggleWord(id) {
  return {type: actionTypes.ACTION_TYPE_TOGGLE_WORD, id};
}

function removeWord(id) {
  return {type: actionTypes.ACTION_TYPE_REMOVE_WORD, id};
}

function setFilterMode(filterMode) {
  return {type: actionTypes.ACTION_TYPE_SET_FILTER_MODE, filterMode};
}

function fetchWords() {
  return (dispatch) => {
    Axios.get(URL + 'word').then((response) => {
      const data = response.data;
      if (data.success) {
        dispatch({
          type: actionTypes.ACTION_TYPE_FETCH_WORDS,
          words: data.words,
        });
      }
    });
  };
}

export default {
  addWord,
  toggleWord,
  removeWord,
  setFilterMode,
  fetchWords,
};
