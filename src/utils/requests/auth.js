import axios from 'axios';

import {BASE_URL} from './constants';

export const do_request_sign_up = ({email_address, password}) =>
  axios.post(`${BASE_URL}/signup`, {email_address, password}, {withCredentials: true});

export const do_request_log_in = ({email_address, password}) =>
  axios.post(`${BASE_URL}/login`, {email_address, password}, {withCredentials: true});
