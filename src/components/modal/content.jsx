import React from 'react';

import Header from './header';
import Body from './body';

export default ({
  modal_props,
  do_close_modal,
  update_add_user_email_action
}) =>
    <div className='modal-content'>
        <Header
          do_close_modal={do_close_modal}
        />
        <Body
          content={modal_props.get('content', 'Here is the modal content')}
          add_user_email={modal_props.get('add_user_email', '')}
          update_add_user_email_action={update_add_user_email_action}
        />
    </div>;
