import {UPDATE_USER_PAGINATION_FILTER} from '../constants/user_pagination_constants.js';

export const update_user_pagination_filter = new_filter_attrs => ({
	type: UPDATE_USER_PAGINATION_FILTER,
	new_filter_attrs
});
