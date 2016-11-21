import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const unconnected_signup_component = () =>
  <div className="app" id="app">
    <div className="padding white">
      <div className="navbar">
        <div className="pull-center">
          <Link to="/" className="navbar-brand text-black">
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
              <input type="password" className="form-control" placeholder="Password" required="" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm Password" required="" />
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
            <span className="padding-right-half">Already have an account?</span>
            <Link to="/login" className="text-primary _600">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default connect()(unconnected_signup_component);
