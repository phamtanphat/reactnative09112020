const filterModeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER_MODE':
      return action.filterMode;
    default:
      return state;
  }
};
export default filterModeReducer;
