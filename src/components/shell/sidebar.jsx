import React from 'react';

import SidebarItem from './sidebar_item';

const get_sidebar_items = () =>
[
  {
    text: 'Home',
    link: '/',
    icon_class: 'fa fa-home'
  },
  {
    text: 'Login',
    link: '/login',
    icon_class: 'fa fa-sign-in'
  },
  {
    text: 'Signup',
    link: '/signup',
    icon_class: 'fa fa-user-plus'
  },
  {
    text: 'Create Circle',
    link: '/circle/create',
    icon_class: 'fa fa-plus-circle'

  },
  {
    text: 'View a Circle',
    link: '/circle/test-circle-id',
    icon_class: 'fa fa-circle'

  },
  {
    text: 'View a User',
    link: '/user/1',
    icon_class: 'fa fa-user'

  },
  {
    text: 'View Circles',
    link: '/circles',
    icon_class: 'fa  fa-dot-circle-o'

  },
  {
    text: '404',
    link: '/asdfasdf',
    icon_class: 'fa fa-exclamation-circle'
  }
];

export default ({active_route}) =>
<div id="aside" className="app-aside fade nav-dropdown black ">
  <div className="navside dk" data-layout="column">
    <div className="navbar no-radius">
      <a href="index.html" className="navbar-brand">
        <span className="hidden-folded inline">ROSCr</span>
      </a>
    </div>
    <div data-flex="" className="hide-scroll">
      <nav className="scroll nav-stacked nav-stacked-rounded nav-color">
        <ul className="nav" data-ui-nav="">
          {get_sidebar_items().map((item, i) =>
            <SidebarItem
              key={i}
              active_route = {active_route}
              {...item} />
          )}
        </ul>
      </nav>
    </div>
  </div>
</div>;
