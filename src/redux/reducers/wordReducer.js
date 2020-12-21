const wordReducer = (state = [], action) => {
  let newWords = null;
  switch (action.type) {
    case 'FETCH_WORDS': {
      return action.words;
    }
    case 'TOGGLE_WORD':
      newWords = state.map((item) => {
        if (item._id === action._id) {
          return action.word;
        }
        return item;
      });
      return newWords;
    case 'REMOVE_WORD':
      newWords = state.filter((item) => {
        if (item.id === action.id) {
          return false;
        }
        return true;
      });
      return newWords;
    case 'ADD_WORD':
      newWords = Object.assign([], state);
      const newWord = {
        id: state.length + 1,
        en: action.txtEn,
        vn: action.txtVn,
        isMemorized: false,
      };
      newWords.unshift(newWord);
      return newWords;
    default:
      return state;
  }
};

export default wordReducer;
