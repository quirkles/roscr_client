import {OPEN_EDIT_USER_PANEL, CLOSE_EDIT_USER_PANEL} from '../constants/user_constants';

export const open_editing_panel_for_user = user_id => ({
  type: OPEN_EDIT_USER_PANEL,
  user_id
});

export const close_editing_panel_for_user = user_id => ({
  type: CLOSE_EDIT_USER_PANEL,
  user_id
});
