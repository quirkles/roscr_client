import React from 'react';

import Header from './header';
import Body from './body';

export default ({modal_props}) =>
    <div className='modal-content'>
        <Header/>
        <Body
          body_text={modal_props.get('body_text', 'Here is the modal content')}
        />
    </div>;
