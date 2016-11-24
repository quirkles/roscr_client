import {fromJS} from 'immutable';
import {EDIT_CIRCLE} from '../constants/circle_constants';

import circle_reducer from './circle_reducer';

const default_state = fromJS({
  'test-circle-id': {
    circle_name: 'Test Circle Name',
    withdrawal_amount: '300',
    participant_count: 12,
    cycle_period: 'monthly',
    start_date: new Date(),
    members: ['1', '2', '3']
  }
});

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
