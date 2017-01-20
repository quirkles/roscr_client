import {get, post} from 'axios';

import {BASE_URL} from './constants';

export const do_find_user_by_id = user_id => get(`${BASE_URL}/api/users/${user_id}`);

export const do_find_many_users_with_params = params =>
  get(`${BASE_URL}/api/users`, {params});

export const do_save_user_data = ({user_id, new_user_data}) => post(`${BASE_URL}/api/users/${user_id}`, new_user_data);

export const do_submit_add_user = invitee_email_address => post(`${BASE_URL}/api/users/invite`, {invitee_email_address});
