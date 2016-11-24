import React from 'react';
import {Link} from 'react-router';

export default ({circle_members}) =>
<div className='box circle-member-list-pane'>
  <div className='box-header blue-grey'>
    <h2 className='padding'>
      <i className="ion-ios-people padding-right-one"></i>
      <span>Circle Members</span>
    </h2>
  </div>
  <div className='box-body'>
    {circle_members.map(member =>
      <div key={member.get('id')}>
        <Link
          to={`/user/${member.get('id')}`}
        >
          {member.get('firstname')} {member.get('lastname')}
        </Link>
      </div>
    )}
  </div>
</div>;
