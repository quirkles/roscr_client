import {Map} from 'immutable';

import {
  HIDE_MODAL,
  SHOW_ADD_USER_MODAL
} from '../constants/modal_constants';

const default_state = Map({
  is_shown: false,
  content: null
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
    default:
      return state;
  }
};

export default modal_reducer;
