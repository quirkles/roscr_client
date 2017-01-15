import {fromJS} from 'immutable';

import {UPDATE_FILTER} from '../constants/circle_pagination_constants';

const default_state = fromJS({
	circles_ids: [],
	filter: {
		limit: 10,
		skip:0,
		sort_by: null,
		query: ''
	}
});

export default (state = default_state, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return state.mergeIn(['filter'], action.new_filter_attrs);
    default:
      return state;
  }
};
