import React from 'react';
import D from 'date-fp';

const user_profile_header_component = ({
  user_to_display,
  open_editing_panel_for_user_with_id
}) =>
<div className='item'>
  <div className="item-bg bg-tile-ignasi"></div>
  <div className="p-a-md">
    <div className="row m-t">
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
          <h4 className="m-a-0 m-b-sm text-capitalize">{user_to_display.get('firstname')} {user_to_display.get('lastname')}</h4>
          <p className="text-muted">
            <span className="m-r">{user_to_display.get('profession', 'No employment information :(')}</span>
            <small>
              <i className="fa fa-map-marker m-r-xs"></i>
              {user_to_display.get('city', 'No known city')}, {user_to_display.get('country', 'No known country')}
            </small>
          </p>
          <a href="#" className="btn btn-sm warn rounded info active m-b" data-ui-toggle-className="success">
            <span className="none">Add Buddy</span>
          </a>
        </div>
      </div>
      <div className="col-sm-5">
        <p className="text-md profile-status">{user_to_display.get('about_me')}</p>
        <p>Trusted user since {D.format('MMMM D YYYY', new Date(user_to_display.get('date_created')))}</p>
        <button
          className="btn rounded warning"
          onClick={open_editing_panel_for_user_with_id(user_to_display.get('id'))}
        >Edit Details</button>
      </div>
    </div>
  </div>
</div>;

export default user_profile_header_component;
