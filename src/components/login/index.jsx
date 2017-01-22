import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {pick, values, mapObjIndexed} from 'ramda';
import classnames from 'classnames';

import {is_required, is_valid_email, has_min_length} from '../../utils/validators';
import {facebook_auth_url} from '../../utils/requests/auth';

import {update_sign_in_up_credentials, attempt_log_in_with_credentials} from '../../actions/user_actions';

const do_validations_on_credentials = credentials => (validators, attr) =>
  validators.map(validator => validator(credentials.get(attr, ''))).filter(r => !!r);

const get_credential_validation_errors = credentials =>
  mapObjIndexed(
    do_validations_on_credentials(credentials),
    {
      email_address: [is_required, is_valid_email],
      password: [is_required, has_min_length(4)]
    }
  );

export const unconnected_login_component = ({
  sign_in_up_credentials,
  update_credential_attr,
  mark_sign_in_up_user_as_attempted_form_submit,
  attempt_log_in_with_credentials_action
}) => {
  const validation_errors = get_credential_validation_errors(sign_in_up_credentials);

  const process_login_click = e => {
    e.preventDefault();
    mark_sign_in_up_user_as_attempted_form_submit();
    if (values(validation_errors).reduce((reduction, value) => reduction + value.length, 0) === 0) {
      attempt_log_in_with_credentials_action(pick(['email_address', 'password'], sign_in_up_credentials.toJS()));
    }
  };

  return (
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
            <a
                href={facebook_auth_url}
                className="btn btn-block indigo text-white m-b-sm"
            >
              <i className="fa fa-facebook pull-left"></i>
              Sign in with Facebook
            </a>
            <div className="m-y text-sm">
              OR
            </div>
            <form name='form' className={classnames({
              'show-form-validation-hints': sign_in_up_credentials.get('has_attempted_form_submit')
            })}>
              <div className="form-group">
                <input
                  type="email"
                  className={classnames('form-control', {
                    'form-error': validation_errors.email_address.length
                  })}
                  placeholder="Email"
                  required=""
                  value={sign_in_up_credentials.get('email_address', '')}
                  onChange={update_credential_attr('email_address')}
                />
                <ul className='form-errors-list'>
                    {validation_errors.email_address.map((error, i) =><li key={i}>{error}</li>)}
                </ul>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className={classnames('form-control', {
                    'form-error': validation_errors.password.length
                  })}
                  placeholder="password"
                  required=""
                  value={sign_in_up_credentials.get('password', '')}
                  onChange={update_credential_attr('password')}
                />
                <ul className='form-errors-list'>
                  {validation_errors.password.map((error, i) =><li key={i}>{error}</li>)}
                </ul>
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
                onClick = {process_login_click}
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
    </div>
  );
};

const map_state_to_props = ({sign_in_up_credentials}) => ({
  sign_in_up_credentials
});

const map_dispatch_to_props = dispatch => {
  const update_sign_in_up_credentials_action = bindActionCreators(update_sign_in_up_credentials, dispatch);

  const update_credential_attr = attr => e => {
    let creds = {};
    creds[attr] = e.target.value;
    update_sign_in_up_credentials_action(creds);
  };

  const attempt_log_in_with_credentials_action = bindActionCreators(attempt_log_in_with_credentials, dispatch);

  const mark_sign_in_up_user_as_attempted_form_submit = () => update_sign_in_up_credentials_action({has_attempted_form_submit: true});

  return ({
    update_credential_attr,
    attempt_log_in_with_credentials_action,
    mark_sign_in_up_user_as_attempted_form_submit
  });
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_login_component);
