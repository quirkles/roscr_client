import React from 'react';

import CircleMemberList from './circle_member_list';
import CircleInformation from './circle_information';
import CircleHeader from './circle_header';
import Timeline from '../../timeline';

const circle_component = ({
  circle_to_display,
  circle_members,
  session_user_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id,
  claim_payout_event_for_user
}) =>
  <div className="view-circle-component">
    <CircleHeader
      circle_to_display={circle_to_display}
      open_editing_panel_for_circle_with_id={() => () => true}
    />
    <div className="padding">
      <div className='row margin-top-two'>
        <div className='col-lg-12 col-xl-5'>
          <CircleInformation
            circle_to_display = {circle_to_display}
            claim_payout_event_on_circle = {claim_payout_event_for_user(session_user_id)}
          />
        </div>
        <div className='col-lg-12 col-xl-5'>
          <CircleMemberList
            circle_members = {circle_members}
            circle_id = {circle_to_display.get('id')}
            show_tooltip_with_data = {show_tooltip_with_data}
            destroy_tooltip_with_id = {destroy_tooltip_with_id}
          />
          <h1 className='text-center serif margin-bottom-one'>Circle Activity Timeline</h1>
          <Timeline
            timeline_items={circle_to_display.get('activity')}
          />
        </div>
      </div>
    </div>
  </div>;

export default circle_component
