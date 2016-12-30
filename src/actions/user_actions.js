import {push} from 'react-router-redux';

import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER,
  LOG_IN_USER,
  ADD_USER
} from '../constants/user_constants';

import {
  do_request_sign_up,
  do_request_log_in,
} from '../utils/requests/auth';

import {
  do_find_user_by_id,
  do_save_user_data
} from '../utils/requests/user';

export const open_editing_panel_for_user = user_id => ({
  type: OPEN_EDIT_USER_PANEL,
  user_id
});

export const close_editing_panel_for_user = user_id => ({
  type: CLOSE_EDIT_USER_PANEL,
  user_id
});

export const start_editing_attr_for_user = ({user_id, attr_to_edit}) => ({
  type: START_EDITING_ATTR_FOR_USER,
  user_id,
  attr_to_edit
});

export const edit_user = ({user_id, user_data}) => ({
  type: EDIT_USER,
  user_id,
  user_data
});

export const update_sign_in_up_credentials = user_data => ({
  type: EDIT_USER,
  user_id: 'sign_in_up_credentials',
  user_data
});

export const log_in_user = user_data => ({
  type: LOG_IN_USER,
  user_data
});

export const add_user = user_data => ({
  type: ADD_USER,
  user_data
});

export const attempt_sign_up_with_credentials = ({email_address, password}) =>
  dispatch =>
    do_request_sign_up({email_address, password})
    .then(
      resp => {
        dispatch(log_in_user(resp.data.user));
        dispatch(push(`/user/${resp.data.user.id}`));
      },
      error => console.error(error)
    );

export const attempt_log_in_with_credentials = ({email_address, password}) =>
  dispatch =>
    do_request_log_in({email_address, password})
    .then(
      resp => {
        dispatch(log_in_user(resp.data.user));
        dispatch(push(`/user/${resp.data.user.id}`));
      },
      error => console.error(error)
    );

export const find_user_by_id = target_user_id =>
  dispatch =>
    do_find_user_by_id(target_user_id)
    .then(
      ({data}) => {
        if (data.success && data.user) {
          dispatch(add_user(data.user));
        }
      },
      error => {
        if (error.response.data.error_code === 'USER_NOT_FOUND') {
          dispatch(add_user({
            id: target_user_id,
            user_not_found_in_db: true
          }));
        }
      }
    );

  export const save_user_changes = ({user_id, new_user_data}) =>
    dispatch =>
      do_save_user_data({user_id, new_user_data})
      .then(
        ({data}) => console.log(data),
        error => console.log(error)
      );

