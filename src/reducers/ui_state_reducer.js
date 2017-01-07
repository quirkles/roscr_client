import {fromJS as from_js} from 'immutable';

import {
  SHOW_TOOLTIP_AT_ELEMENT,
  DESTROY_TOOLTIP,
  DESTROY_ALL_TOOLTIPS,
  OPEN_HEADER_DROPDOWN,
  CLOSE_HEADER_DROPDOWN
} from '../constants/ui_state_constants';

import { LOG_OUT_USER } from '../constants/user_constants';

const default_state = from_js({});

const ui_state_reducer = (state = default_state, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP_AT_ELEMENT:
      return state.setIn(['tooltips', action.tooltip_id], action.tooltip_data);
    case DESTROY_TOOLTIP:
      return state.deleteIn(['tooltips', action.tooltip_id]);
    case DESTROY_ALL_TOOLTIPS:
      return default_state;
    case OPEN_HEADER_DROPDOWN:
      return state.set('header_dropdown_open', true);
    case LOG_OUT_USER:
    case CLOSE_HEADER_DROPDOWN:
      return state.set('header_dropdown_open', false);
    default:
      return state;
  }
};

export default ui_state_reducer;
