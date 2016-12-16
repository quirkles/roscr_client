import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER,
  LOG_IN_USER
} from '../constants/user_constants';

import {
  do_request_sign_up,
  do_request_log_in
} from '../utils/requests/auth';

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

export const attempt_sign_up_with_credentials = ({email_address, password}) =>
  dispatch =>
    do_request_sign_up({email_address, password})
    .then(
      resp =>dispatch(log_in_user(resp.data.user)),
      error => console.error(error)
    );

export const attempt_log_in_with_credentials = ({email_address, password}) =>
  dispatch =>
    do_request_log_in({email_address, password})
    .then(
      resp =>dispatch(log_in_user(resp.data.user)),
      error => console.error(error)
    );
