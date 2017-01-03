import {Map} from 'immutable';

import {HIDE_MODAL} from '../constants/modal_constants';

const default_state = Map({
  is_shown: true
});

const modal_reducer = (state = default_state, action) => {
    switch (action.type) {
    case HIDE_MODAL:
      return state.set('is_shown', false);
    default:
      return state;
  }
};

export default modal_reducer;
