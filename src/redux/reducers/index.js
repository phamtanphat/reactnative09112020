import wordReducer from './wordReducer';
import filterModeReducer from './filterModeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
});

export default rootReducer;
