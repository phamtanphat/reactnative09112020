import actionTypes from './actionTypes';

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
export default {
  addWord,
  toggleWord,
  removeWord,
  setFilterMode,
};
