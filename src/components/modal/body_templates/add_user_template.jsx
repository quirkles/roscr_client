import React from 'react';

const add_user_template = () =>
<div className='add-user-template'>
  <h2 className='margin-bottom-one'>Invite a user to ROSCr!</h2>
  <p className='text-md margin-bottom-one'>Just enter their email below and hit Invite. We'll let you know when they join the community.</p>
  <input
    className='margin-bottom-one input-field'
    type='text'
  />
  <div>
    <div className="btn btn-lg primary">Invite</div>
  </div>
</div>;

export default add_user_template;
