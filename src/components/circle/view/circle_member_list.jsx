import React from 'react';

import CircleMemberListItem from './circle_member_list_item';

const circle_member_list_component = ({circle_members}) =>
<div className='box circle-member-list-pane'>
  <div className='box-header blue-grey'>
    <h2 className='padding'>
      <i className="ion-ios-people padding-right-one"></i>
      <span>Circle Members</span>
    </h2>
  </div>
  <div className='box-body'>
    <ul className="list">
      {circle_members.map(member =>
        <CircleMemberListItem
          key = {member.get('id')}
          circle_member = {member}
        />
      )}
    </ul>
  </div>
</div>;

export default circle_member_list_component;
