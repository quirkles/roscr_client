import React from 'react';
import classnames from 'classnames';

import {get_full_name} from '../../../utils/user_immutable';

const user_info_panel = ({
  user_to_display,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  edit_user_attr_with_id,
  stop_editing_and_do_update_attr
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
  <div className='table-container'>
    <table className='table table-striped'>
      <tbody>
        <tr>
          <td width='20%'></td>
          <td width='30%'>Name:</td>
          <td>
            <div
              className="editable-attr padding-right-one"
              style={{width: `${user_to_display.get('firstname', 'firstname').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'firstname' ?
                <input
                  value={user_to_display.get('firstname', 'firstname')}
                  onBlur={stop_editing_and_do_update_attr('firstname')}
                  onChange={edit_user_attr_with_id('firstname')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('firstname')}
                >
                  {user_to_display.get('firstname', 'firstname')}
                </div>
              }
            </div>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('lastname', 'lastname').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'lastname' ?
                <input
                  value={user_to_display.get('lastname', 'lastname')}
                  onBlur={stop_editing_and_do_update_attr('lastname')}
                  onChange={edit_user_attr_with_id('lastname')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('lastname')}
                >
                  {user_to_display.get('lastname', 'lastname')}
                </div>
              }
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>About Me:</td>
          <td>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('about_me', 'User has not told us about themselves yet.').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'about_me' ?
                <input
                  value={user_to_display.get('about_me', 'User has not told us about themselves yet.')}
                  onBlur={stop_editing_and_do_update_attr('about_me')}
                  onChange={edit_user_attr_with_id('about_me')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('about_me')}
                >
                  {user_to_display.get('about_me', 'User has not told us about themselves yet.')}
                </div>
              }
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>City:</td>
          <td>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('city', 'Unknown City').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'city' ?
                <input
                  value={user_to_display.get('city', 'Unknown City')}
                  onBlur={stop_editing_and_do_update_attr('city')}
                  onChange={edit_user_attr_with_id('city')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('city')}
                >
                  {user_to_display.get('city', 'Unknown City')}
                </div>
              }
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Country:</td>
          <td>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('country', 'Unknown Country').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'country' ?
                <input
                  value={user_to_display.get('country', 'Unknown Country')}
                  onBlur={stop_editing_and_do_update_attr('country')}
                  onChange={edit_user_attr_with_id('country')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('country')}
                >
                  {user_to_display.get('country', 'Unknown Country')}
                </div>
              }
            </div>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Profession:</td>
          <td>
            <div
              className='editable-attr'
              style={{width: `${user_to_display.get('profession', 'No profession yet for this user.').length * 16}px`}}
            >
              {user_to_display.get('field_currently_editing', null) === 'profession' ?
                <input
                  value={user_to_display.get('profession', 'No profession yet for this user.')}
                  onBlur={stop_editing_and_do_update_attr('profession')}
                  onChange={edit_user_attr_with_id('profession')}
                  ref={i => i && i.focus()}
                /> :
                <div
                  onClick={start_editing_attr_for_user_with_id('profession')}
                >
                  {user_to_display.get('profession', 'No profession yet for this user.')}
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
