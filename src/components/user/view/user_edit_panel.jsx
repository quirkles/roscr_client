import React from 'react';
import classnames from 'classnames';

import {get_full_name} from '../../../utils/user_immutable';

const user_info_panel = ({
  user_to_display,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  edit_user_attr_with_id
}) =>
<div
  className = {classnames('user-edit-panel', {
    open: user_to_display.get('is_edit_detail_panel_open')
  })}
>
  <div
    className='edit-panel-close-box bg-danger'
    onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
  ></div>
  <h2>Edit details for {get_full_name(user_to_display)}</h2>
  <div className='padding'>
    <div className="editable-attr">
      {
        user_to_display.get('field_currently_editing', null) === 'firstname' ?
        <div className="editable-attr-input-wrapper">
          <input
            size={user_to_display.get('firstname').length}
            value={user_to_display.get('firstname')}
            onBlur={start_editing_attr_for_user_with_id(null)}
            onChange={edit_user_attr_with_id('firstname')}
            ref={i => i && i.focus()}
          />
        </div> :
        <span
          onClick={start_editing_attr_for_user_with_id('firstname')}
        >{user_to_display.get('firstname')}</span>
      }
    </div>
  </div>
</div>;

export default user_info_panel;
