import {get, post, put, all} from 'axios';

import {BASE_URL} from './constants';

export const do_find_circle_by_id = circle_id =>
  get(`${BASE_URL}/api/circles/${circle_id}`);

export const do_create_circle = circle_data =>
  post(`${BASE_URL}/api/circles`, circle_data, {withCredentials: true});

export const do_find_many_circles_by_ids = circle_id_array =>
  all(circle_id_array.map(circle_id => do_find_circle_by_id(circle_id)));

export const do_find_many_circles_with_params = params =>
  get(`${BASE_URL}/api/circles`, {params});

export const do_update_savings_goal_in_circle_for_user = ({circle_id, user_id, savings_goal}) =>
  put(`${BASE_URL}/api/circles/${circle_id}/users/${user_id}/savings_goal`, ({savings_goal}), {withCredentials: true});
