import React from 'react';

import Header from './header';
import Body from './body';

export default ({
  modal_props,
  do_close_modal
}) =>
    <div className='modal-content'>
        <Header
          do_close_modal={do_close_modal}
        />
        <Body
          content={modal_props.get('content', 'Here is the modal content')}
        />
    </div>;
