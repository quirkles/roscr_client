import {Map, List} from 'immutable';

import {
  EDIT_USER,
  ADD_KNOWN_TAKEN_EMAIL_ADDRESS
} from '../constants/user_constants';

const default_state = Map({});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_USER:
      return action.user_id === 'sign_in_up_credentials' ?
        state.merge(action.user_data) :
        state;
    case ADD_KNOWN_TAKEN_EMAIL_ADDRESS:
      return state.update('known_taken_email_addresses', List([]), addys =>
        addys.includes(action.taken_email_address) ? addys : addys.push(action.taken_email_address));
    default:
      return state;
  }
};
