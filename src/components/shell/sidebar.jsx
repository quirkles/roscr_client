import React from 'react';

export default () =>
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
          <li>
            <a>
              <span className="nav-caret">
                <i className="fa fa-caret-down"></i>
              </span>
              <span className="nav-icon">
                <i className="ion-plus-circled"></i>
              </span>
              <span className="nav-text">Menu Item</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>;
