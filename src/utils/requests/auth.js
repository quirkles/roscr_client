import axios from 'axios';

export const do_request_sign_up = ({email_address, password}) =>
  axios.post('http://localhost:5000/signup', {email_address, password});
