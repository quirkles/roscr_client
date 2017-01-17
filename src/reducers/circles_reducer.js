import {Map, fromJS} from 'immutable';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES,
  HANDLE_FIND_CIRCLES_SUCCESS
} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = Map({});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return action.circle_id && state.get(action.circle_id) ?
        state.update(action.circle_id, c => circle_reducer(c, action)) :
        state;
    case ADD_CIRCLE:
      return action.circle_data && action.circle_data.id ?
        state.set(action.circle_data.id, fromJS(action.circle_data).delete('id')) :
        state;
    case ADD_CIRCLES:
    case HANDLE_FIND_CIRCLES_SUCCESS:
      return action.circle_list.reduce((new_state, circle) => new_state.set(circle.id, fromJS(circle).delete('id')), state);
    default:
      return state;
  }
};
