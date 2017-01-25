import React from 'react';
import {Link} from 'react-router';

import classnames from 'classnames';

export default ({
  session_user,
  is_header_dropdown_open,
  is_notification_dropdown_open,
  open_notification_dropdown,
  open_header_dropdown,
  close_all_nav_dropdowns,
  do_show_add_user_modal,
  log_out_user
}) =>
<div className='app-header white bg b-b'>
  <div className='navbar'>
    <div className='navbar-item pull-left h5'>Roscr</div>
    {session_user.get('id') ?
      <ul className='nav navbar-nav pull-right'>
        <li className='nav-item'>
          <a className='nav-link'>
            <span
              className='btn btn-sm primary'
              onClick={do_show_add_user_modal}
            >
              <i className='fa fa-fw fa-user-plus margin-right-half'/>
              <span className='hidden-sm-down'>Add User</span>
            </span>
          </a>
        </li>
        <li className={classnames('nav-item', 'dropdown', {open: is_header_dropdown_open})}>
          <a
            className='nav-link clear'
            onClick={open_header_dropdown}
          >
            {session_user.get('avatar_url') ?
              <span className='avatar w-32'>
                <img src={session_user.get('avatar_url')} className='w-full rounded'/>
              </span> :
              <span>{session_user.get('email_address')}</span>
            }
          </a>
          <div className='dropdown-menu w dropdown-menu-scale pull-right'>
            <Link
              className='dropdown-item'
              to={`/users/${session_user.get('id')}`}
              onClick={close_all_nav_dropdowns}
            >
              <span>Profile</span>
            </Link>
            <Link
              className='dropdown-item'
              to='/login'
              onClick={log_out_user}
            >
              <span>Log out</span>
            </Link>
          </div>
        </li>
        <li
          onClick= {open_notification_dropdown}
          className={classnames('nav-item dropdown pos-stc-xs', {open: is_notification_dropdown_open})}>
          <a className="nav-link clear">
            <i className="ion-android-notifications-none w-24"/>
            {session_user.get('notifications').size ?
              <span className="label up p-a-0 danger"/> :
              null
            }
          </a>
          <div className='dropdown-menu dropdown-menu-scale pull-right w-xl no-bg no-border no-shadow'>
            <div className="scrollable">
              <ul className="list-group list-group-gap m-a-0">
                {session_user.get('notifications').map(notification =>
                  <li
                      className="list-group-item dark-white box-shadow-z0 b"
                      onClick={e => e.preventDefault()}
                  >
                    <span className="pull-left m-r">
                      <img src="images/a0.jpg" alt="..." className="w-40 img-circle" />
                    </span>
                    <span className="clear block">
                      -- Notification text to go here --
                      <br/>
                      <small className="text-muted"> -- Timestamp -- </small>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </li>
        <div
          className={classnames('navbar-dropdown-overlay', {visible: is_notification_dropdown_open || is_header_dropdown_open})}
          onClick={close_all_nav_dropdowns}
        ></div>
      </ul> :
      <Link
        className='navbar-item pull-right'
        to='/login'>Log in
      </Link>
    }
  </div>
</div>;
