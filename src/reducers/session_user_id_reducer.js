
const
 default_state = null;

import {
  LOG_IN_USER,
  LOG_OUT_USER,
  SET_SESSION_DATA
} from '../constants/user_constants';

const session_user_id_reducer = (state = default_state, action) => {
    switch (action.type) {
    case LOG_IN_USER:
      return action.user_data && action.user_data.id ? action.user_data.id : state;
    case LOG_OUT_USER:
      return null;
    case SET_SESSION_DATA:
      return action.session_data && action.session_data.session_user && action.session_data.session_user.id || state;
    default:
      return state;
  }
};

export default session_user_id_reducer;
