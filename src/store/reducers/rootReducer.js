import {combineReducers} from 'redux'
import authorization from './authorization';
import gettingLoan from './gettingLoan';
import registration from './registration'

export default combineReducers({
  authorization,
  gettingLoan,
  registration
})