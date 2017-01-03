import {
  SHOW_ADD_USER_MODAL,
  HIDE_MODAL
} from '../constants/modal_constants';

export const close_modal = () => ({type: HIDE_MODAL});

export const show_add_user_modal = () => ({type: SHOW_ADD_USER_MODAL});
