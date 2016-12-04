import {Map} from 'immutable';

import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER
} from '../constants/user_constants';

const default_state = Map({
  is_edit_detail_panel_open: true
});

const user_reducer = (state = default_state, action) => {
  switch (action.type) {
    case OPEN_EDIT_USER_PANEL:
      return state.set('is_edit_detail_panel_open', true);
    case CLOSE_EDIT_USER_PANEL:
      return state.set('is_edit_detail_panel_open', false);
    case START_EDITING_ATTR_FOR_USER:
      return state.set('field_currently_editing', action.attr_to_edit);
    case EDIT_USER:
      return state.merge(action.user_data);
    default:
      return state;
  }
};

export default user_reducer;
