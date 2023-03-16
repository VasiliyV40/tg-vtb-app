import {combineReducers} from 'redux'
import authorization from './authorization';
import gettingLoan from './gettingLoan';

export default combineReducers({
  authorization,
  gettingLoan
})