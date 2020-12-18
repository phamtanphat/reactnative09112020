import actionTypes from './actionTypes';

function addWord(txtEn, txtVn) {
  return {type: actionTypes.ACTION_TYPE_ADD_WORD, txtEn, txtVn};
}

export default {addWord};
