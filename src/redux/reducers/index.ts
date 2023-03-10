import charsReducers from './charsReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  charsReducers,
});

export default rootReducer;
