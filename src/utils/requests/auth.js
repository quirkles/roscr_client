import {post} from 'axios';

import {BASE_URL} from './constants';

export const do_request_sign_up = ({email_address, password}) =>
  post(`${BASE_URL}/signup`, {email_address, password}, {withCredentials: true});

export const do_request_log_in = ({email_address, password}) =>
  post(`${BASE_URL}/api/login`, {email_address, password}, {withCredentials: true});

export const do_log_out = () =>
  post(`${BASE_URL}/api/logout`);

export const facebook_auth_url = `${BASE_URL}/api/auth/facebook`;
