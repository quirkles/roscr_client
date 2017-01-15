import {UPDATE_FILTER} from '../constants/circle_pagination_constants.js';

export const update_filter = new_filter_attrs => ({
	type: UPDATE_FILTER,
	new_filter_attrs
});
