import {
  SHOW_ADD_USER_MODAL,
  HIDE_MODAL,
  UPDATE_ADD_USER_EMAIL,
  SUBMIT_ADD_USER
} from '../constants/modal_constants';

import {do_submit_add_user} from '../utils/requests/user'

export const close_modal = () => ({type: HIDE_MODAL});

export const show_add_user_modal = () => ({type: SHOW_ADD_USER_MODAL});

export const update_add_user_email = email_address => ({
  type: UPDATE_ADD_USER_EMAIL,
  email_address
});

export const submit_add_user = () => ({
  type: SUBMIT_ADD_USER
});

export const do_request_submit_add_user = invitee_user_email =>
  dispatch =>
    do_submit_add_user(invitee_user_email)
    .then(
      ({data}) => console.log(data),
      error => console.log(error)
    );
