import {Map} from 'immutable';

import {OPEN_EDIT_USER_PANEL} from '../constants/user_constants';

const default_state = Map({
  is_edit_detail_panel_open: true
});

const user_reducer = (state = default_state, action) => {
  switch (action.type) {
    case OPEN_EDIT_USER_PANEL:
      return state.set('is_edit_detail_panel_open', true);
    default:
      return state;
  }
};

export default user_reducer;
