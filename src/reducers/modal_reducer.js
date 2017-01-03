import {Map} from 'immutable';

const default_state = Map({
  is_shown: true
});

const modal_reducer = (state = default_state, action) => {
    switch (action.type) {
    case 'blah':
      return action.user_data && action.user_data.id ? action.user_data.id : state;
    default:
      return state;
  }
};

export default modal_reducer;
