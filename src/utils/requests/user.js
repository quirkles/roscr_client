import {get} from 'axios';

import {BASE_URL} from './constants'

export const do_find_user_by_id = user_id => get(`${BASE_URL}/user/${user_id}`);
