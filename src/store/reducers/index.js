import { combineReducers } from 'redux';

import authReducer from './auth';
import dashboardReducer from './dashboard';
import boardReducer from './board';

const Reducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  board: boardReducer
});

export default Reducer;