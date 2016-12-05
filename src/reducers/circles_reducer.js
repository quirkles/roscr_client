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
    date_created: new Date(),
    date_last_modified: new Date(),
    members: ['1', '2', '3'],
    created_by: '1',
    activity: [
      {
        'type': 'CIRCLE_CREATED',
        'created_at': '2016-08-14T18:36:35.863Z',
        'originator': {
          'username': 'Alex Quirk',
          'id': 'ciruyd1df0000g83eq4ionpqz'
        }
      }
    ]
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
