import React from 'react';
import {Link} from 'react-router';

import classnames from 'classnames';

export default ({
  session_user,
  header_dropdown_open,
  notification_dropdown_open,
  toggle_notification_dropdown_action,
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
              className='btn btn-sm primary'
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
              to={`/users/${session_user.get('id')}`}
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
        <li
          onClick= {toggle_notification_dropdown_action}
          className={classnames("nav-item dropdown pos-stc-xs", {open: notification_dropdown_open})}>
          <a className="nav-link clear">
            <i className="ion-android-notifications-none w-24"/>
            <span className="label up p-a-0 danger"/>
          </a>
          <div className='dropdown-menu pull-right w-xl animated no-bg no-border no-shadow'>
            <div className="scrollable">
              <ul className="list-group list-group-gap m-a-0">
                <li className="list-group-item dark-white box-shadow-z0 b">
                  <span className="pull-left m-r">
                    <img src="images/a0.jpg" alt="..." className="w-40 img-circle" />
                  </span>
                  <span className="clear block">
                    Use awesome <a href="#" className="text-primary">animate.css</a>
                    <br/>
                    <small className="text-muted">10 minutes ago</small>
                  </span>
                </li>
                <li className="list-group-item dark-white box-shadow-z0 b">
                  <span className="pull-left m-r">
                    <img src="images/a1.jpg" alt="..." className="w-40 img-circle"/>
                  </span>
                  <span className="clear block">
                    <a href="#" className="text-primary">Joe</a>
                    Added you as friend
                    <br/>
                    <small className="text-muted">2 hours ago</small>
                  </span>
                </li>
                <li className="list-group-item dark-white text-color box-shadow-z0 b">
                  <span className="pull-left m-r">
                    <img src="images/a2.jpg" alt="..." className="w-40 img-circle"/>
                  </span>
                  <span className="clear block">
                    <a href="#" className="text-primary">Danie</a> sent you a message
                    <br/>
                    <small className="text-muted">1 day ago</small>
                  </span>
                </li>
              </ul>
            </div>
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
