import {fromJS as from_js} from 'immutable';
import {SHOW_TOOLTIP_AT_ELEMENT} from '../constants/tooltip_constants';
import {DESTROY_TOOLTIP} from '../constants/tooltip_constants';

const default_state = from_js({});

const tooltips_reducer = (state = default_state, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP_AT_ELEMENT:
      return state.set(action.tooltip_id, action.tooltip_data);
    case DESTROY_TOOLTIP:
      return state.delete(action.tooltip_id);
    default:
      return state;
  }
};

export default tooltips_reducer;
