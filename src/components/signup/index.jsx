import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {mapObjIndexed} from 'ramda';
import classnames from 'classnames';

import {is_required, is_valid_email, must_match} from '../../utils/validators';

import {update_sign_in_up_credentials} from '../../actions/user_actions';

const do_validations_on_credentials = credentials => (validators, attr) =>
  validators.map(validator => validator(credentials.get(attr, ''))).filter(r => !!r);

const get_credential_validation_errors = credentials =>
  mapObjIndexed(
    do_validations_on_credentials(credentials),
    {
      email_address: [is_required, is_valid_email],
      password: [is_required],
      confirm_password: [must_match(credentials.get('password', ''))]
    }
  );

const unconnected_signup_component = ({
  sign_in_up_credentials,
  update_credential_attr,
  mark_sign_in_up_user_as_attempted_form_submit
}) => {
  const process_submit_click = e => {
    e.preventDefault();
    mark_sign_in_up_user_as_attempted_form_submit();
  };

  const validation_errors = get_credential_validation_errors(sign_in_up_credentials);

  return (
    <div className='app' id='app'>
      <div className='padding white'>
        <div className='navbar'>
          <div className='pull-center'>
            <Link to='/' className='navbar-brand text-black'>
              <span className='hidden-folded inline'>Roscr</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='b-t'>
        <div className='center-block w-xxl w-auto-xs p-y-md text-center'>
          <div className='p-a-md'>
            <form name='form' className={classnames({
              'form-validation': sign_in_up_credentials.get('has_attempted_form_submit')
            })}>
              <div className='form-group'>
                <input
                  type='email'
                  className={classnames('form-control', {
                    'form-error': validation_errors.email_address.length
                  })}
                  placeholder='Email'
                  value={sign_in_up_credentials.get('email_address')}
                  onChange={update_credential_attr('email_address')}
                />
                <ul
                  className='form-errors-list'
                  >
                    {validation_errors.email_address.map(error =>
                      <li>{error}</li>
                    )}
                </ul>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  value={sign_in_up_credentials.get('password')}
                  onChange={update_credential_attr('password')}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Confirm Password'
                  value={sign_in_up_credentials.get('confirm_password')}
                  onChange={update_credential_attr('confirm_password')}
                />
              </div>
              <button
                className='btn btn-lg black p-x-lg'
                onClick={process_submit_click}
              >Sign in</button>
            </form>
            <div className='margin-top-one'>
              <span className='padding-right-half'>Already have an account?</span>
              <Link to='/login' className='text-primary _600'>Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const map_state_to_props = ({sign_in_up_credentials}) => ({sign_in_up_credentials});

const map_dispatch_to_props = dispatch => {
  const update_sign_in_up_credentials_action = bindActionCreators(update_sign_in_up_credentials, dispatch);

  const update_credential_attr = attr => e => {
    let creds = {};
    creds[attr] = e.target.value;
    update_sign_in_up_credentials_action(creds);
  };

  const mark_sign_in_up_user_as_attempted_form_submit = () => update_sign_in_up_credentials_action({has_attempted_form_submit: true});

  return ({
    update_credential_attr,
    mark_sign_in_up_user_as_attempted_form_submit
  });
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_signup_component);
