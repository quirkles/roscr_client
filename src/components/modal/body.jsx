import React from 'react';

import AddUserTemplate from './body_templates/add_user_template';

const get_body_content = ({
  content,
  update_add_user_email_action,
  invitee_email_address,
  submit_add_user_action,
  do_request_add_user_action,
  has_submitted_add_user
}) => {
  switch (content) {
    case 'add_user_template':
      return <AddUserTemplate
        update_add_user_email_action={update_add_user_email_action}
        invitee_email_address={invitee_email_address}
        submit_add_user_action={submit_add_user_action}
        do_request_add_user_action={do_request_add_user_action}
        has_submitted_add_user={has_submitted_add_user}
      />;
    default:
      return 'Here is the modal content!';
  }
};

export default (props) =>
<div className='modal-body'>
  {get_body_content(props)}
</div>;
