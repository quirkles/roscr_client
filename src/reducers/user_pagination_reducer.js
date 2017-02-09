import {fromJS, List} from 'immutable';

import {HANDLE_FIND_USERS_SUCCESS} from '../constants/user_constants';
import {UPDATE_USER_PAGINATION_FILTER} from '../constants/user_pagination_constants';

const default_state = fromJS({
	user_ids: [],
  fetch_state: 'never_fetched',
	filter: {
		limit: 25,
		skip: 0,
		sort_by: '-trust_score',
		query: '',
    min_trust_score: null,
	}
});

export default (state = default_state, action) => {
  switch (action.type) {
    case UPDATE_USER_PAGINATION_FILTER:
      return state.mergeIn(['filter'], action.new_filter_attrs).set('fetch_state', 'unfetched');
    case HANDLE_FIND_USERS_SUCCESS:
      return state.set('user_ids', List(action.user_list.map(user => user.id))).set('fetch_state', 'fetched');
    default:
      return state;
  }
};
