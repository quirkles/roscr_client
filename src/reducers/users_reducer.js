import {Map} from 'immutable';
import {fromJS} from 'immutable';

import user_reducer from './user_reducer';

import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER,
  LOG_IN_USER
} from '../constants/user_constants';

const default_state = Map({});

const member_reducer = (state = default_state, action) => {
  switch (action.type) {
    case OPEN_EDIT_USER_PANEL:
    case CLOSE_EDIT_USER_PANEL:
    case START_EDITING_ATTR_FOR_USER:
    case EDIT_USER:
      return action.user_id && state.get(action.user_id) ?
        state.update(action.user_id, user => user_reducer(user, action)) :
        state;
    case LOG_IN_USER:
        return state.set(action.user.id, fromJS(action.user).delete('id'));
    default:
      return state;
  }
};

export default member_reducer;
