import {Map, fromJS} from 'immutable';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES,
  HANDLE_FIND_CIRCLES_SUCCESS,
  BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER,
  STOP_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER,
  EDIT_CIRCLE_SAVINGS_GOAL_FOR_USER
} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = Map({});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
    case BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER:
    case STOP_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER:
    case EDIT_CIRCLE_SAVINGS_GOAL_FOR_USER:
      return action.circle_id && state.get(action.circle_id) ?
        state.update(action.circle_id, c => circle_reducer(c, action)) :
        state;
    case ADD_CIRCLE:
      return action.circle_data && action.circle_data.id ?
        state.set(
          action.circle_data.id,
          fromJS(action.circle_data).delete('id')
            .update('created_by', creator => creator.get && creator.get('id') || creator)
        ) :
        state;
    case ADD_CIRCLES:
    case HANDLE_FIND_CIRCLES_SUCCESS:
      return state.merge(action
        .circle_list.reduce(
          (new_state, circle) => new_state
            .set(circle.id, fromJS(circle)
                .delete('id')
                .update('created_by', creator => creator.get && creator.get('id') || creator)
            ),
          state
        ));
    default:
      return state;
  }
};
