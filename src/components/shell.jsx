import React from 'react';

const shell = ({children}) =>
<div className="app" id="app">
  <div id="aside" className="app-aside fade nav-dropdown black folded">
    <div className="navside dk" data-layout="column">
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
  </div>
  <div id="content" className="app-content box-shadow-z2 bg pjax-container" role="main">
    <div className="app-header white bg b-b">
      <div className="navbar" data-pjax=""></div>
    </div>
    <div className="app-body">
      {React.cloneElement(children)}
    </div>
  </div>
</div>

export default shell;
