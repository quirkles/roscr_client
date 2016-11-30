import { combineReducers } from 'redux';

import {routerReducer} from 'react-router-redux';

import circles from './circles_reducer';
import new_circle from './new_circle_reducer';
import users from './users_reducer';
import tooltips from './tooltips_reducer';
import session_user_id from './session_user_id_reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  circles,
  new_circle,
  tooltips,
  session_user_id
});

export default rootReducer;
