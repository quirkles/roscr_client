import {fromJS as from_js} from 'immutable';

const default_state = from_js({
  '1': {
    firstname: 'peter',
    lastname: 'jones'
  },
  '2': {
    firstname: 'alice',
    lastname: 'smith'
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
