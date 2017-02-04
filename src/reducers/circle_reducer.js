import {Map, List} from 'immutable';
import {
  EDIT_CIRCLE,
  BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER,
  STOP_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER,
  EDIT_CIRCLE_SAVINGS_GOAL_FOR_USER
} from '../constants/circle_constants';


const default_state = Map({
  participant_count: 12,
  cycle_period: 'monthly',
  start_date: new Date()
});

export default (state = default_state, action) => {
  switch (action.type) {
    case EDIT_CIRCLE:
      return state.merge(action.circle_data);
    case BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER:
    case STOP_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER:
      return state.get('members').includes(action.user_id) ?
        state.get('savings_goals', List([])).find(savings_goal => savings_goal.get('user_id') === action.user_id) ?
        state.update('savings_goals', List([]), savings_goals =>
          savings_goals.map(savings_goal => savings_goal.get('user_id') === action.user_id ?
            savings_goal.merge({is_editing: action.type === BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER}) :
            savings_goal
          )) :
          state.update('savings_goals', List([]), savings_goals => savings_goals.push(Map({user_id: action.user_id, is_editing: true}))) :
        state;
    case EDIT_CIRCLE_SAVINGS_GOAL_FOR_USER:
      return state.get('members').includes(action.user_id) ?
        state.get('savings_goals', List([])).find(savings_goal => savings_goal.get('user_id') === action.user_id) ?
        state.update('savings_goals', List([]), savings_goals =>
          savings_goals.map(savings_goal => savings_goal.get('user_id') === action.user_id ?
            savings_goal.merge({savings_goal: action.savings_goal}) :
            savings_goal
          )) :
          state.update('savings_goals', List([]), savings_goals => savings_goals.push(Map({user_id: action.user_id, is_editing: true}))) :
        state;
    default:
      return state;
  }
};
