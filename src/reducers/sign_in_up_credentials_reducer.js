import {Map} from 'immutable';

import {
  EDIT_USER
} from '../constants/user_constants';

const default_state = Map({
  username: '',
  password: '',
  confirm_password: ''
});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_USER:
      return action.user_id === 'sign_in_up_credentials' ?
        state.merge(action.user_data) :
        state;
    default:
      return state;
  }
};