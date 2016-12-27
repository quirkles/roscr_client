import {get, post} from 'axios';

import {BASE_URL} from './constants';

export const do_find_circle_by_id = circle_id => get(`${BASE_URL}/api/circles/${circle_id}`);

export const do_create_circle = circle_data => post(`${BASE_URL}/api/circles`, circle_data, {withCredentials: true});
