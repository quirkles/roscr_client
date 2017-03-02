import React from 'react';

export default ({
  metadata,
  actions
}) =>
<div>
  <h4 className='margin-bottom-one'>Invite: {metadata.user.firstname} {metadata.user.lastname}</h4>
  <h5 className='margin-bottom-one'>To circle: {metadata.circle.circle_name}</h5>
  <div
    className="btn btn-lg primary"
  >Send Invite</div>
</div>;
