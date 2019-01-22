import { combineReducers } from 'redux';
import common from './common';
import netgroup from './netgroup';

export default combineReducers({
  common,
  netgroup
});
