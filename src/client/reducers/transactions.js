import { combineReducers } from 'redux';

import {
  defaultTransactions
} from './defaults';

function transactions(state = defaultTransactions, action) {
  return state;
}

export default combineReducers({
  transactions
});
