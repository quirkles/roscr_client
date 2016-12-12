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

const new_circle = fromJS({
  participant_count: 12,
  cycle_period: 'monthly',
  start_date: new Date(),
  hover_hint: null
});

const session_user_id = null;

const sidebar = Map({});

const sign_in_up_credentials = fromJS({
  email_address: '',
  password: '',
  confirm_password: ''
});

const ui_state = fromJS({
  tooltips: {},
  header_dropdown_open: false
});

const users = fromJS({
  '1': {
    firstname: 'peter',
    lastname: 'jones',
    email_address: 'p.jones@gmail.com',
    avatar_url: 'https://api.adorable.io/avatars/285/peterjones@adorable.io.png',
    date_created: new Date(),
    date_last_modified: new Date(),
    trust_score: 65,
    circles_created: ['1'],
    circles_as_member: ['2', 'test-circle-id'],
    about_me: 'Here\'s my about me!',
    city: 'Toronto',
    country: 'Canada',
    profession: 'Server'
  },
  '2': {
    firstname: 'alice',
    lastname: 'smith',
    email_address: 'alan.smith@gmail.com',
    avatar_url: 'https://api.adorable.io/avatars/285/alansmith@adorable.io.png',
    date_created: new Date(),
    date_last_modified: new Date(),
    trust_score: 80,
    circles_created: ['2'],
    circles_as_member: ['1', 'test-circle-id']
  },
  '3': {
    firstname: 'Francis',
    lastname: 'Archer',
    email_address: 'archer@gmail.com',
    avatar_url: 'https://api.adorable.io/avatars/285/francisarcher@adorable.io.png',
    date_created: new Date(),
    date_last_modified: new Date(),
    trust_score: 99,
    circles_created: [],
    circles_as_member: ['1', '2']
  }
});

export const initial_dev_state = {
  circles,
  new_circle,
  session_user_id,
  sign_in_up_credentials,
  ui_state,
  users
};

export const initial_empty_state = {
  circles: Map({}),
  new_circle: Map({}),
  session_user_id: null,
  sign_in_up_credentials: Map({}),
  ui_state: Map({}),
  users: Map({})
};
