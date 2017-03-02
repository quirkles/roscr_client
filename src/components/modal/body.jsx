import React from 'react';

import AddUserTemplate from './body_templates/add_user_template';
import InviteUserToCirlceTemplate from './body_templates/invite_user_to_circle_template';

const get_body_content = ({
  content
}) => {
  switch (content) {
    case 'add_user_template':
      return AddUserTemplate;
    case 'invite_user_to_circle_template':
      return InviteUserToCirlceTemplate;
    default:
      return () => <div>Here is the modal content!</div>;
  }
};

export default ({
  content,
  metadata,
  actions
}) => {
  const Content = get_body_content({content});
  return (
    <div className='modal-body'>
      <Content
        metadata={metadata}
        actions={actions}
      />
    </div>
  );
};
