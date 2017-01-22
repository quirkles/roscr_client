import {push} from 'react-router-redux';

import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER,
  LOG_IN_USER,
  LOG_OUT_USER,
  SET_SESSION_DATA,
  ADD_USER,
  ADD_USERS,
  ADD_KNOWN_TAKEN_EMAIL_ADDRESS,
  HANDLE_FIND_USERS_SUCCESS
} from '../constants/user_constants';

import {
  do_request_sign_up,
  do_request_log_in,
  do_log_out
} from '../utils/requests/auth';

import {
  do_find_user_by_id,
  do_find_many_users_by_ids,
  do_save_user_data,
  do_find_many_users_with_params,
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

export const add_users = user_list => ({
  type: ADD_USERS,
  user_list
});

export const update_sign_in_up_credentials = user_data => ({
  type: EDIT_USER,
  user_id: 'sign_in_up_credentials',
  user_data
});

const add_known_taken_email_address = taken_email_address => ({
  type: ADD_KNOWN_TAKEN_EMAIL_ADDRESS,
  taken_email_address
});

export const log_in_user = user_data => ({
  type: LOG_IN_USER,
  user_data
});

export const log_out_user = () => ({
  type: LOG_OUT_USER
});

export const add_user = user_data => ({
  type: ADD_USER,
  user_data
});

export const set_session_data = session_data => ({
  type: SET_SESSION_DATA,
  session_data
});

export const attempt_sign_up_with_credentials = ({email_address, password}) =>
  dispatch =>
    do_request_sign_up({email_address, password})
    .then(
      resp => {
        dispatch(log_in_user(resp.data.user));
        dispatch(push(`/user/${resp.data.user.id}`));
      },
      ({response}) => {
        if (response && response.data && response.data.error_code === 'EMAIL_ALREADY_EXISTS') {
          dispatch(add_known_taken_email_address(response.data.taken_email_address));
        }
      }
    );

  const handle_find_users_success = user_list => ({
    type: HANDLE_FIND_USERS_SUCCESS,
    user_list
  });

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

export const attempt_log_out = () =>
  dispatch =>
    do_log_out()
    .then(
      ({data}) => {
        if (data.success) {
          dispatch(log_out_user());
        }
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

  export const find_many_users_by_ids = user_id_array =>
    dispatch =>
      do_find_many_users_by_ids(user_id_array)
      .then(response_array => {
        const users = response_array
          .map(resp => resp.data.success ?
              resp.data.user :
              {
                id: resp.data.missing_user_id,
                user_not_found_in_db: true
              });
          dispatch(add_users(users));
      });

  export const find_many_users_with_params = params =>
    dispatch =>
      do_find_many_users_with_params(params)
        .then(({data}) => {
          dispatch(handle_find_users_success(data.users));
        });

  export const save_user_changes = ({user_id, new_user_data}) =>
    () =>
      do_save_user_data({user_id, new_user_data})
      .then(
        ({data}) => console.log(data),
        error => console.log(error)
      );
