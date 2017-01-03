import React from 'react';
import {Link} from 'react-router';

import classnames from 'classnames';

export default ({
  session_user,
  header_dropdown_open,
  open_header_dropdown,
  close_header_dropdown,
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
              className='btn btn-sm btn-primary'
              onClick={do_show_add_user_modal}
            >
              <i className='fa fa-fw fa-user-plus margin-right-half'></i>
              <span className='hidden-sm-down'>Add User</span>
            </span>
          </a>
        </li>
        <li className={classnames('nav-item', 'dropdown', {open: header_dropdown_open})}>
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
              to={`/user/${session_user.get('id')}`}
              onClick={close_header_dropdown}
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
        <div
          className='header-dropdown-overlay'
          onClick={close_header_dropdown}
        ></div>
      </ul> :
      <Link
        className='navbar-item pull-right'
        to='/login'>Log in
      </Link>
    }
  </div>
</div>;
