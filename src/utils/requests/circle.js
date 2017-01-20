import {get, post, all} from 'axios';

import {BASE_URL} from './constants';

export const do_find_circle_by_id = circle_id => get(`${BASE_URL}/api/circles/${circle_id}`);

export const do_create_circle = circle_data => post(`${BASE_URL}/api/circles`, circle_data, {withCredentials: true});

export const do_find_many_circles_by_ids = circle_id_array =>
  all(circle_id_array.map(circle_id => do_find_circle_by_id(circle_id)));

export const do_find_many_circles_with_params = params =>
  get(`${BASE_URL}/api/circles`, {params});
