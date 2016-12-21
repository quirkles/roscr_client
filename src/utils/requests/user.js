import {get} from 'axios';

import {BASE_URL} from './constants'

export const do_find_user_by_id = user_id => get(`${BASE_URL}/api/users/${user_id}`);
