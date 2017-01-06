import React from 'react';

import Header from './header';
import Body from './body';

export default ({
  modal_props,
  do_close_modal,
  update_add_user_email_action,
  submit_add_user_action,
  do_request_add_user_action
}) =>
    <div className='modal-content'>
        <Header
          do_close_modal={do_close_modal}
        />
        <Body
          content={modal_props.get('content', 'Here is the modal content')}
          invitee_email_address={modal_props.getIn(['invite_user', 'invitee_email_address'], '')}
          has_submitted_add_user={modal_props.getIn(['invite_user', 'has_submitted_add_user'], false)}
          update_add_user_email_action={update_add_user_email_action}
          submit_add_user_action={submit_add_user_action}
          do_request_add_user_action={do_request_add_user_action}
        />
    </div>;
