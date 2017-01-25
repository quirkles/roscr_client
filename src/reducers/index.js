import { combineReducers } from 'redux';

import {routerReducer as routing} from 'react-router-redux';

import circles from './circles_reducer';
import circle_pagination from './circle_pagination_reducer';
import new_circle from './new_circle_reducer';
import users from './users_reducer';
import user_pagination from './user_pagination_reducer';
import ui_state from './ui_state_reducer';
import session_user from './session_user_id_reducer';
import sign_in_up_credentials from './sign_in_up_credentials_reducer';
import modal from './modal_reducer';

const rootReducer = combineReducers({
  routing,
  circles,
  circle_pagination,
  users,
  user_pagination,
  new_circle,
  ui_state,
  session_user,
  modal,
  sign_in_up_credentials
});

export default rootReducer;
