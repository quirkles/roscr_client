import {Map} from 'immutable';
import {EDIT_CIRCLE} from '../constants/circle_constants';
import {SET_HOVER_HINT} from '../constants/new_circle_constants';

const default_state = Map({
  participant_count: 12,
  cycle_period: 'monthly',
  start_date: new Date(),
  hover_hint: null
});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return action.circle_id === 'new-circle' ?
        state.merge(action.circle_data) :
        state;
    case SET_HOVER_HINT:
      console.log(`setting hover hint: ${action.hover_hint}`);
      return state.set('hover_hint', action.hover_hint);
    default:
      return state;
  }
};
