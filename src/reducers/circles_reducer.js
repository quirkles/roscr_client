import {Map} from 'immutable';
import {EDIT_CIRCLE} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = Map({});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return action.circle_id && state.get(action.circle_id) ?
        state.update(action.circle_id, c => circle_reducer(c, action)) :
        state;
    default:
      return state;
  }
};
