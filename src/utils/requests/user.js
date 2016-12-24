import {get, post} from 'axios';

import {BASE_URL} from './constants';

export const do_find_user_by_id = user_id => get(`${BASE_URL}/api/users/${user_id}`);

export const do_save_user_data = ({user_id, new_user_data}) => post(`${BASE_URL}/api/users/${user_id}`, new_user_data);
