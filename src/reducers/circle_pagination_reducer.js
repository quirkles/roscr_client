import {fromJS, List} from 'immutable';

import {HANDLE_FIND_CIRCLES_SUCCESS} from '../constants/circle_constants';
import {UPDATE_CIRCLE_PAGINATION_FILTER} from '../constants/circle_pagination_constants';

const default_state = fromJS({
	circle_ids: [],
  fetch_state: 'never_fetched',
	filter: {
		limit: 25,
		skip: 0,
		sort_by: null,
		query: ''
	}
});

export default (state = default_state, action) => {
  switch (action.type) {
    case UPDATE_CIRCLE_PAGINATION_FILTER:
      return state.mergeIn(['filter'], action.new_filter_attrs).set('fetch_state', 'unfetched');
    case HANDLE_FIND_CIRCLES_SUCCESS:
      return state.set('circle_ids', List(action.circle_list.map(c => c.id))).set('fetch_state', 'fetched');
    default:
      return state;
  }
};
