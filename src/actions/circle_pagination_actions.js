import {UPDATE_CIRCLE_PAGINATION_FILTER} from '../constants/circle_pagination_constants.js';

export const update_circle_pagination_filter = new_filter_attrs => ({
	type: UPDATE_CIRCLE_PAGINATION_FILTER,
	new_filter_attrs
});
