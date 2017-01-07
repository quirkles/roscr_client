import {fromJS} from 'immutable';

import {
  HIDE_MODAL,
  SHOW_ADD_USER_MODAL,
  UPDATE_ADD_USER_EMAIL,
  SUBMIT_ADD_USER
} from '../constants/modal_constants';

const default_state = fromJS({
  is_shown: false,
  content: null,
  invite_user: {
    invitee_email_address: '',
    has_submitted_add_user: false
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
    default:
      return state;
  }
};

export default modal_reducer;