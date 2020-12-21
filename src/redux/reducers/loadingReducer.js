const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return action.loading;
    }
    case 'FETCH_WORDS': {
      return action.loading;
    }
    default:
      return state;
  }
};

export default loadingReducer;
