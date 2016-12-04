import {
  OPEN_EDIT_USER_PANEL,
  CLOSE_EDIT_USER_PANEL,
  START_EDITING_ATTR_FOR_USER,
  EDIT_USER
} from '../constants/user_constants';

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
