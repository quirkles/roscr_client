import {fromJS, Map} from 'immutable';

const circles = fromJS({
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
        date: '2016-08-14T18:36:18.000Z',
        id: '57b0ba339b9348a8201e5f20',
        recipient_id: '2'
      },
      {
        date: '2016-09-14T18:36:18.000Z',
        id: '57b0ba339b9348a8201e5f21'
      },
      {
        date: '2016-10-14T18:36:18.000Z',
        id: '57b0ba339b9348a8201e5f22'
      },
      {
        date: '2016-11-14T19:36:18.000Z',
        id: '57b0ba339b9348a8201e5f23',
        recipient_id: '6'
      },
      {
        date: '2016-12-14T19:36:18.000Z',
        id: '57b0ba339b9348a8201e5f24'
      },
      {
        date: '2017-01-14T19:36:18.000Z',
        id: '57b0ba339b9348a8201e5f25'
      },
      {
        date: '2017-02-14T19:36:18.000Z',
        id: '57b0ba339b9348a8201e5f26'
      },
      {
        date: '2017-03-14T18:36:18.000Z',
        id: '57b0ba339b9348a8201e5f27'
      }
    ],
    savings_goals: [
      'circle_member_id': '1',
      'savings_goal_text': 'I am saving up for a holiday'
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

const initial_dev_state = {
  circles: Map({})
};

export default initial_dev_state;
