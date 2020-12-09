const defaultWords = [
  {id: 1, en: 'One', vn: 'Một', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: true},
  {id: 4, en: 'Four', vn: 'Bốn', isMemorized: false},
];

const wordReducer = (state = defaultWords, action) => {
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
