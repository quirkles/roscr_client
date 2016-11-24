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
    created: new Date(),
    lastModified: new Date(),
    trustScore: 80,
    circlesCreated: ['2'],
    circlesAsMember: ['1', 'test-circle-id']
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
