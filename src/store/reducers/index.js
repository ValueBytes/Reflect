import { combineReducers } from 'redux';

import authReducer from './auth';

const Reducer = combineReducers({
  auth: authReducer
});

export default Reducer;