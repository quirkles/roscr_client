import React from 'react';

import CircleMemberListItem from './circle_member_list_item';

const circle_member_list_component = ({
  circle_members,
  circle_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id,
  session_user_id,
  begin_editing_savings_goal_for_user,
  stop_editing_savings_goal_for_user,
  edit_savings_goal_for_user
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
          is_session_user={member.get('id') === session_user_id}
          begin_editing_savings_goal={begin_editing_savings_goal_for_user(member.get('id'))}
          stop_editing_savings_goal={stop_editing_savings_goal_for_user(member.get('id'))}
          edit_savings_goal={edit_savings_goal_for_user(member.get('id'))}
        />
      )}
    </ul>
  </div>
</div>;

export default circle_member_list_component;
