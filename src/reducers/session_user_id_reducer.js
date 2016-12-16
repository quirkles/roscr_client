const default_state = null;

import {LOG_IN_USER} from '../constants/user_constants';

const session_user_id_reducer = (state = default_state, action) => {
    switch (action.type) {
    case LOG_IN_USER:
      return action.user_data && action.user_data.id ? action.user_data.id : state;
    default:
      return state;
  }
};

export default session_user_id_reducer;
