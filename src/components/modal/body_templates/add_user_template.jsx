import React from 'react';
import classnames from 'classnames';

import {is_required, is_valid_email} from '../../../utils/validators';

const get_email_validation_errors = email_address =>
  [is_required, is_valid_email].map(validator => validator(email_address)).filter(r => !!r);


const add_user_template = ({
  invitee_email_address,
  update_add_user_email_action,
  submit_add_user_action,
  do_request_add_user_action,
  has_submitted_add_user
}) => {
  const validation_errors = get_email_validation_errors(invitee_email_address);

  const process_submit_click = () => {
    if (!validation_errors.length) {
      do_request_add_user_action(invitee_email_address);
    }
    submit_add_user_action();
  };

  return (
    <div className='add-user-template'>
      <h2 className='margin-bottom-one'>Invite a user to ROSCr!</h2>
      <p className='text-md margin-bottom-one'>Just enter their email below and hit Invite. We'll let you know when they join the community.</p>
      <form className={classnames({
        'show-form-validation-hints': has_submitted_add_user
      })}>
        <input
          value={invitee_email_address}
          onChange={update_add_user_email_action}
          placeholder='person@example.com'
          className={classnames('margin-bottom-one input-field', {
            'form-error': validation_errors.length
          })}
          type='text'
        />
        <ul className='form-errors-list'>
          {validation_errors.map((error, i) =><li className='margin-bottom-one' key={i}>{error}</li>)}
        </ul>
      </form>
      <div>
        <div
          className="btn btn-lg primary"
          onClick={process_submit_click}
        >Invite</div>
      </div>
    </div>
  );
};

export default add_user_template;
