import {fromJS as from_js} from 'immutable';

import {
  SHOW_TOOLTIP_AT_ELEMENT,
  DESTROY_TOOLTIP,
  DESTROY_ALL_TOOLTIPS,
  OPEN_HEADER_DROPDOWN,
  CLOSE_HEADER_DROPDOWN,
  OPEN_NOTIFICATION_DROPDOWN,
  CLOSE_ALL_NAV_DROPDOWNS
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
      return state.set('is_header_dropdown_open', true);
    case OPEN_NOTIFICATION_DROPDOWN:
      return state.set('is_notification_dropdown_open', true);
    case LOG_OUT_USER:
    case CLOSE_HEADER_DROPDOWN:
      return state.set('is_header_dropdown_open', false);
    case CLOSE_ALL_NAV_DROPDOWNS:
      return state.merge({
        is_header_dropdown_open: false,
        is_notification_dropdown_open: false
      });
    default:
      return state;
  }
};

export default ui_state_reducer;
