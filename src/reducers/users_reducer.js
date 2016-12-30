import {Map} from 'immutable';
import {fromJS} from 'immutable';

import user_reducer from './user_reducer';

import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER,
  LOG_IN_USER,
  ADD_USER
} from '../constants/user_constants';

import {ADD_CIRCLE} from '../constants/circle_constants';

const default_state = Map({});

const member_reducer = (state = default_state, action) => {
    switch (action.type) {
        case ADD_USER:
        case LOG_IN_USER:
            return action.user_data && action.user_data.id ?
              state
                .set(action.user_data.id, fromJS(action.user_data).delete('id'))
                .setIn([action.user_data.id, 'last_known_server_verison'], action.user_data) :
              state;
        case ADD_CIRCLE:
          return action.circle_data && action.circle_data.created_by && state.get(action.circle_data.created_by) ?
                state.update(action.circle_data.created_by, user => user_reducer(user, action)) :
                state;
        case OPEN_EDIT_USER_PANEL:
        case CLOSE_EDIT_USER_PANEL:
        case START_EDITING_ATTR_FOR_USER:
        case EDIT_USER:
            return action.user_id && state.get(action.user_id) ?
                state.update(action.user_id, user => user_reducer(user, action)) :
                state;
        default:
            return state;
    }
};

export default member_reducer;
