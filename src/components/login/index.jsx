import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export const unconnected_login_component = () =>

<div className="app" id="app">
  <div className="padding">
    <div className="navbar">
      <div className="pull-center">
        <a href="index.html" className="navbar-brand">
          <div data-ui-include="'images/logo.svg'"></div>
          <span className="hidden-folded inline">Roscr</span>
        </a>
      </div>
    </div>
  </div>
  <div className="b-t">
    <div className="center-block w-xxl w-auto-xs p-y-md text-center">
      <div className="p-a-md">
        <form name="form" action="home.html">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" required="" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password" required="" />
          </div>
          <div className="m-b-md">
            <label className="md-check">
              <input type="checkbox" />
              <i className="primary"></i>
                Keep me signed in
            </label>
          </div>
          <button type="submit" className="btn btn-lg black p-x-lg">Sign in</button>
        </form>
        <div className="m-y">
          <a href="forgot-password.html" className="_600">Forgot password?</a>
        </div>
        <div>
          Do not have an account?
          <a href="signup.html" className="text-primary _600">Sign up</a>
        </div>
      </div>
    </div>
  </div>
</div>

export default connect()(unconnected_login_component);
