import {fromJS, List} from 'immutable';

import {HANDLE_FIND_CIRCLES_SUCCESS} from '../constants/circle_constants';
import {UPDATE_FILTER} from '../constants/circle_pagination_constants';

const default_state = fromJS({
	circle_ids: [],
  fetch_state: 'unfetched',
	filter: {
		limit: 10,
		skip: 0,
		sort_by: null,
		query: ''
	}
});

export default (state = default_state, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return state.mergeIn(['filter'], action.new_filter_attrs);
    case HANDLE_FIND_CIRCLES_SUCCESS:
      return state.set('circle_ids', List(action.circle_list.map(c => c.id))).set('fetch_state', 'fetched');
    default:
      return state;
  }
};
