import charsReducers from './charsReducers';
import loginReducers from './loginRegucers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  charsReducers,
  loginReducers,
});

export default rootReducer;
