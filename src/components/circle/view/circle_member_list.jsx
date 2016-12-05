import React from 'react';

import CircleMemberListItem from './circle_member_list_item';

const circle_member_list_component = ({
  circle_members,
  circle_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id
}) =>
<div className='box circle-member-list-pane'>
  <div className='box-header yellow'>
    <h2 className='padding-half serif bold'>
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
          circle_id = {circle_id}
          show_tooltip_with_data = {show_tooltip_with_data}
          destroy_tooltip_with_id = {destroy_tooltip_with_id}
        />
      )}
    </ul>
  </div>
</div>;

export default circle_member_list_component;
