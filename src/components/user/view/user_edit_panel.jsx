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
  <div>
    <table className='table table-striped'>
      <tbody>
        <tr>
          <td width='20%'></td>
          <td width='30%'>
            <div>Name:</div>
          </td>
          <td>
            <div
              className="editable-attr padding-right-one"
              style={{width: `${user_to_display.get('firstname').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'firstname' ?
                <input
                  value={user_to_display.get('firstname')}
                  onBlur={start_editing_attr_for_user_with_id(null)}
                  onChange={edit_user_attr_with_id('firstname')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('firstname')}
                >
                  {user_to_display.get('firstname')}
                </div>
              }
            </div>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('firstname').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'lastname' ?
                <input
                  value={user_to_display.get('lastname')}
                  onBlur={start_editing_attr_for_user_with_id(null)}
                  onChange={edit_user_attr_with_id('lastname')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('lastname')}
                >
                  {user_to_display.get('lastname')}
                </div>
              }
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>;

export default user_info_panel;
