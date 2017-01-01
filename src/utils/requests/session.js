import {get} from 'axios';

import {BASE_URL} from './constants';

export const get_session_info = () => get(`${BASE_URL}/api/session`, {withCredentials: true});
