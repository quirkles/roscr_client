import {Map} from 'immutable';

import {
  SET_ACTIVE_SIDEBAR_ITEM
} from '../constants/sidebar_constants';

const default_state = Map({});

export default (state = default_state, action) => {
  switch (action.type) {
    case SET_ACTIVE_SIDEBAR_ITEM:
      return state;
    default:
      return state;
  }
};
