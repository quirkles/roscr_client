import React from 'react';

import AddUserTemplate from './body_templates/add_user_template';

const get_body_content = content_value => {
  switch (content_value) {
    case 'add_user_template':
      return <AddUserTemplate/>;
    default:
      return 'Here is the modal content!';
  }
};

export default ({content}) =>
<div className='modal-body'>
  {get_body_content(content)}
</div>;
