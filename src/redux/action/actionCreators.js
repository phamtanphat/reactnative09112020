import actionTypes from './actionTypes';
import Axios from 'axios';

const URL = 'https://servertuvung09112020.herokuapp.com/';

function addWord(txtEn, txtVn) {
  return (dispatch) => {
    Axios.post(URL + 'word', {en: txtEn, vn: txtVn})
      .then((response) => {
        const {success, word} = response.data;
        if (success) {
          dispatch({type: actionTypes.ACTION_TYPE_ADD_WORD, newWord: word});
        }
      })
      .catch((error) => console.log(error));
  };
}

function toggleWord(_id, ismemorized) {
  return (dispatch) => {
    Axios.put(URL + `word/${_id}`, {ismemorized})
      .then((response) => {
        const {success, word} = response.data;
        if (success) {
          dispatch({type: actionTypes.ACTION_TYPE_TOGGLE_WORD, word, _id});
        }
      })
      .catch((error) => console.log(error));
  };
}

function removeWord(_id) {
  return (dispatch) => {
    Axios.delete(URL + `word/${_id}`)
      .then((response) => {
        const {success, word} = response.data;
        if (success) {
          dispatch({type: actionTypes.ACTION_TYPE_REMOVE_WORD, _id});
        }
      })
      .catch((error) => console.log(error));
  };
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
          loading: false,
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
