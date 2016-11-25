import {fromJS as from_js} from 'immutable';

const default_state = from_js({
  '1': {
    firstname: 'peter',
    lastname: 'jones',
    email_address: 'p.jones@gmail.com',
    avatar_url: 'https://api.adorable.io/avatars/285/peterjones@adorable.io.png',
    date_created: new Date(),
    date_last_modified: new Date(),
    trust_score: 80,
    circles_created: ['1'],
    circles_as_member: ['2', 'test-circle-id']
  },
  '2': {
    firstname: 'alice',
    lastname: 'smith',
    email_address: 'alan.smith@gmail.com',
    avatar_url: 'https://api.adorable.io/avatars/285/alansmith@adorable.io.png',
    date_created: new Date(),
    date_last_modified: new Date(),
    trust_score: 99,
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
    trust_score: 75,
    circles_created: [],
    circles_as_member: ['1', '2']
  }
});

const member_reducer = (state = default_state, action) => {
  switch (action.type) {
    //case EDIT_CIRCLE:
    default:
      return state;
  }
};

export default member_reducer;