import {Map} from 'immutable';
import {EDIT_CIRCLE} from '../constants/circle_constants';


const default_state = Map({
  participant_count: 12,
  cycle_period: 'monthly',
  start_date: new Date()
});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return state.merge(action.circle_data);
    default:
      return state;
  }
};
