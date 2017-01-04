import {
  SHOW_ADD_USER_MODAL,
  HIDE_MODAL,
  UPDATE_ADD_USER_EMAIL
} from '../constants/modal_constants';

export const close_modal = () => ({type: HIDE_MODAL});

export const show_add_user_modal = () => ({type: SHOW_ADD_USER_MODAL});

export const update_add_user_email = email_address => ({
  type: UPDATE_ADD_USER_EMAIL,
  email_address
});
