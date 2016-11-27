import { combineReducers } from 'redux';

import {routerReducer} from 'react-router-redux';
import circles from './circles_reducer';
import new_circle from './new_circle_reducer';
import users from './users_reducer';
import tooltips from './tooltips_reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  circles,
  new_circle,
  tooltips
});

export default rootReducer;
