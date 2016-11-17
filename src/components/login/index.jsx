import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export const unconnected_login_component = () =>

<div className="app" id="app">
  <div className="padding">
    <div className="navbar">
      <div className="pull-center">
        <Link to="/" className="navbar-brand">
          <span className="hidden-folded inline">Roscr</span>
        </Link>
      </div>
    </div>
  </div>
  <div className="b-t">
    <div className="center-block w-xxl w-auto-xs p-y-md text-center">
      <div className="p-a-md">
        <form name="form">
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
          <button className="btn btn-lg black p-x-lg">Sign in</button>
        </form>
        <div className="m-y">
          <a href="forgot-password.html" className="_600">Forgot password?</a>
        </div>
        <div>
          <span className="padding-right-half">Do not have an account?</span>
          <Link to="/signup" className="text-primary _600">Sign up</Link>
        </div>
      </div>
    </div>
  </div>
</div>;

export default connect()(unconnected_login_component);
