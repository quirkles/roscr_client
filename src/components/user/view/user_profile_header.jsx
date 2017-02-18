import React from 'react';
import D from 'date-fp';

import {get_display_name} from '../../../utils/user_immutable';

const user_profile_header_component = ({
  user_to_display,
  circles_user_can_be_invited_to,
  open_editing_panel_for_user_with_id
}) =>
<div className='item'>
  <div className="item-bg bg-tile-ignasi"></div>
  <div className="p-a-md">
    <div className="row m-t serif">
      <div className="col-sm-7">
        <a href="#" className="pull-left m-r-md">
          <span className="avatar w-96">
            <img
              src={`https://api.adorable.io/avatars/285/${user_to_display.get('id')}@adorable.io.png`}
            />
            <i className="on b-white"></i>
          </span>
        </a>
        <div className="clear m-b">
          <h4 className="m-b-sm text-capitalize">{get_display_name(user_to_display)}</h4>
          <p className="text-muted">
            <span className="m-r">{user_to_display.get('profession', 'No employment information :(')}</span>
            <small>
              <i className="fa fa-map-marker m-r-xs"></i>
              {user_to_display.get('city', 'No known city')}, {user_to_display.get('country', 'No known country')}
            </small>
          </p>
          <a href="#" className="btn btn-sm warn rounded active m-b" data-ui-toggle-className="success">
            <span className="none">Add Buddy</span>
            <i className="fa fa-plus margin-left-half"></i>
          </a>
          {circles_user_can_be_invited_to.size ?
            <a href="#" className="btn btn-sm margin-left-one rounded success active m-b" data-ui-toggle-className="success">
              <span className="none">Invite user to circle</span>
              <i className="fa fa-caret-down margin-left-half"></i>
            </a> : null
          }
          <div>
            <span className='bold text-md margin-right-one'>User Trust Score:</span>
            <span className="label rounded label-lg info">
              {user_to_display.get('trust_score')}
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <p className="text-md profile-status">{user_to_display.get('about_me', 'User hasn\'t filled in their about me.')}</p>
        <p>Trusted user since {D.format('MMMM D YYYY', new Date(user_to_display.get('created')))}</p>
        <button
          className="btn rounded warning"
          onClick={open_editing_panel_for_user_with_id(user_to_display.get('id'))}
        >Edit Details</button>
      </div>
    </div>
  </div>
</div>;

export default user_profile_header_component;
