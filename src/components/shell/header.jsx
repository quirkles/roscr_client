import React from 'react';

import classnames from 'classnames';

export default ({
  session_user,
  header_dropdown_open
}) =>
<div className="app-header white bg b-b">
  <div className="navbar">
    <ul className="nav navbar-nav pull-right">
      <li className={classnames('nav-item', 'dropdown', {open: header_dropdown_open})}>
        <a className="nav-link clear">
          <span className="avatar w-32">
            <img src={session_user.get('avatar_url')} className="w-full rounded"/>
          </span>
        </a>
        <div className="dropdown-menu w dropdown-menu-scale pull-right">
          <a className="dropdown-item" href="profile.html">
            <span>Profile</span>
          </a>
          <a className="dropdown-item" href="setting.html">
            <span>Settings</span>
          </a>
          <a className="dropdown-item" href="app.inbox.html">
            <span>Inbox</span>
          </a>
          <a className="dropdown-item" href="app.message.html">
            <span>Message</span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="docs.html">
            Need help?
          </a>
          <a className="dropdown-item" href="signin.html">Sign out</a>
        </div>
      </li>
    </ul>
  </div>
</div>;
