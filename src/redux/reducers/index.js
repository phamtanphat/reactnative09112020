import wordReducer from './wordReducer';
import filterModeReducer from './filterModeReducer';
import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  words: wordReducer,
  filterMode: filterModeReducer,
  loading: loadingReducer,
});

export default rootReducer;
