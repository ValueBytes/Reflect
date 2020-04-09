import { combineReducers } from 'redux';

import authReducer from './auth';
import dashboardReducer from './dashboard';

const Reducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer
});

export default Reducer;