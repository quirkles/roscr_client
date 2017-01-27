import {Map, List, fromJS} from 'immutable';
import {pick} from 'ramda';

const default_state = Map({
  id: null,
  notifications: List([])
});

import {
  LOG_IN_USER,
  LOG_OUT_USER,
  SET_SESSION_DATA
} from '../constants/user_constants';

const session_user_id_reducer = (state = default_state, action) => {
    switch (action.type) {
    case LOG_IN_USER:
      return action.user_data && action.user_data.id ? state.merge(pick(['id', 'notifications'], action.user_data)) : state;
    case LOG_OUT_USER:
      return Map({});
    case SET_SESSION_DATA:
      return action.session_data && action.session_data.session_user ? fromJS(pick(['id', 'notifications'], action.session_data.session_user)) : state;
    default:
      return state;
  }
};

export default session_user_id_reducer;
