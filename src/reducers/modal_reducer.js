import {Map, fromJS} from 'immutable';

import {
  HIDE_MODAL,
  SHOW_ADD_USER_MODAL,
  UPDATE_ADD_USER_EMAIL,
  SUBMIT_ADD_USER
} from '../constants/modal_constants';

import {OPEN_INVITE_USER_TO_CIRCLE_MODAL} from '../constants/user_constants'

const default_state = fromJS({
  is_shown: false,
  content: null,
  invite_user: {
    invitee_email_address: '',
    has_submitted_add_user: false
  },
  invite_user_to_circle_data: {
    user_id: null,
    circle_id: null
  }
});

const modal_reducer = (state = default_state, action) => {
    switch (action.type) {
    case HIDE_MODAL:
      return state.set('is_shown', false);
    case SHOW_ADD_USER_MODAL:
      return state.merge({
        is_shown: true,
        content: 'add_user_template'
      });
      case UPDATE_ADD_USER_EMAIL:
        return state.setIn(['invite_user', 'invitee_email_address'], action.email_address);
      case SUBMIT_ADD_USER:
        return state.setIn(['invite_user', 'has_submitted_add_user'], true);
      case OPEN_INVITE_USER_TO_CIRCLE_MODAL:
        return state.merge({
          is_shown: true,
          content: 'invite_user_to_circle_template',
          invite_user_to_circle_data: Map({
            user_id: action.user_id,
            circle_id: action.circle_id
          })
        });
    default:
      return state;
  }
};

export default modal_reducer;
