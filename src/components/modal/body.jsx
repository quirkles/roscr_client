import React from 'react';

import AddUserTemplate from './body_templates/add_user_template';

const get_body_content = ({
  content,
  add_user_email,
  update_add_user_email_action,
  submit_add_user_action
}) => {
  switch (content) {
    case 'add_user_template':
      return <AddUserTemplate
        update_add_user_email_action={update_add_user_email_action}
        add_user_email={add_user_email}
        submit_add_user_action={submit_add_user_action}
      />;
    default:
      return 'Here is the modal content!';
  }
};

export default (props) =>
<div className='modal-body'>
  {get_body_content(props)}
</div>;
