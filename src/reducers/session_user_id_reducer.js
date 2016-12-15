const default_state = null;

import {LOG_IN_USER} from '../actions/user_actions';

const session_user_id_reducer = (state = default_state, action) => {
    switch (action.type) {
    case LOG_IN_USER:
        return action.user.id;
    default:
      return state;
  }
};

export default session_user_id_reducer;
