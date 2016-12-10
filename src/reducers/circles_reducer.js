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
    payout_events: [
      {
        'date': '2016-08-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f20'
      },
      {
        'date': '2016-09-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f21'
      },
      {
        'date': '2016-10-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f22'
      },
      {
        'date': '2016-11-14T19:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f23'
      },
      {
        'date': '2016-12-14T19:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f24'
      },
      {
        'date': '2017-01-14T19:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f25'
      },
      {
        'date': '2017-02-14T19:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f26'
      },
      {
        'date': '2017-03-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f27'
      },
      {
        'date': '2017-04-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f28'
      },
      {
        'date': '2017-05-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f29'
      },
      {
        'date': '2017-06-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f2a'
      },
      {
        'date': '2017-07-14T18:36:18.000Z',
        '_id': '57b0ba339b9348a8201e5f2b'
      }
    ],
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
