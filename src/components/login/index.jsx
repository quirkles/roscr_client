import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import axios from 'axios';
import {update_sign_in_up_credentials as update_sign_in_up_credentials_action} from '../../actions/user_actions';

const login_user = user_data => axios.post('http://localhost:5000/login', user_data)
.then(resp => {
  debugger;
});

export const unconnected_login_component = ({
  sign_in_up_credentials,
  update_credential_attr
}) =>
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
            <input
              // type="email"
              className="form-control"
              placeholder="Email"
              required=""
              value={sign_in_up_credentials.get('username')}
              onChange={update_credential_attr('username')}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              required=""
              value={sign_in_up_credentials.get('password')}
              onChange={update_credential_attr('password')}
              />
          </div>
          <div className="m-b-md">
            <label className="md-check">
              <input type="checkbox" />
              <i className="primary"></i>
                Keep me signed in
            </label>
          </div>
          <button
            className = "btn btn-lg black p-x-lg"
            onClick = {e => {
              e.preventDefault();
              login_user(sign_in_up_credentials.toJS());
            }}
          >Sign in</button>
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

const map_state_to_props = ({sign_in_up_credentials}) => ({
  sign_in_up_credentials
});

const map_dispatch_to_props = dispatch => {
  const update_sign_in_up_credentials = bindActionCreators(update_sign_in_up_credentials_action, dispatch);
  const update_credential_attr = attr => e => {
    let creds = {};
    creds[attr] = e.target.value;
    update_sign_in_up_credentials(creds);
  };
  return ({update_credential_attr});
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_login_component);
