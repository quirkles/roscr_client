import React from 'react';
import {Link} from 'react-router';

import classnames from 'classnames';

export default ({
  session_user,
  header_dropdown_open,
  open_header_dropdown,
  close_header_dropdown
}) =>
<div className="app-header white bg b-b">
  <div className="navbar">
    <div className="navbar-item pull-left h5">Roscr</div>
    <ul className="nav navbar-nav pull-right">
      <li className={classnames('nav-item', 'dropdown', {open: header_dropdown_open})}>
        <a
          className="nav-link clear"
          onClick={open_header_dropdown}
        >
          <span className="avatar w-32">
            <img src={session_user.get('avatar_url')} className="w-full rounded"/>
          </span>
        </a>
        <div className="dropdown-menu w dropdown-menu-scale pull-right">
          <Link
            className="dropdown-item"
            to={`/user/${session_user.get('id')}`}
          >
            <span>Profile</span>
          </Link>
        </div>
      </li>
      <div
        className="header-dropdown-overlay"
        onClick={close_header_dropdown}
      ></div>
    </ul>
  </div>
</div>;
