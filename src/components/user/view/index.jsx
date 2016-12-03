import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Map} from 'immutable';
import D from 'date-fp';

import {open_editing_panel_for_user, close_editing_panel_for_user} from '../../../actions/user_actions';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display,
  open_editing_panel_for_user_with_id,
  close_editing_panel_for_user_with_id
}) =>
  <div className="item view-user-component">
    <div className="item-bg">
      <img
        src={user_to_display.get('avatar_url')}
        className="blur opacity-3"
      />
    </div>
    <div className="p-a-md">
      <div className="row m-t">
        <div className="col-sm-7">
          <a href="#" className="pull-left m-r-md">
            <span className="avatar w-96">
              <img
                src={user_to_display.get('avatar_url')}
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
            <div className="block clearfix m-b">
              <a href="" className="btn btn-icon btn-social rounded b-a btn-sm">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-facebook indigo"></i>
              </a>
              <a href="" className="btn btn-icon btn-social rounded b-a btn-sm">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-twitter light-blue"></i>
              </a>
              <a href="" className="btn btn-icon btn-social rounded b-a btn-sm">
                <i className="fa fa-google-plus"></i>
                <i className="fa fa-google-plus red"></i>
              </a>
              <a href="" className="btn btn-icon btn-social rounded b-a btn-sm">
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-linkedin cyan-600"></i>
              </a>
            </div>
            <a href="#" className="btn btn-sm warn rounded info active m-b" data-ui-toggle-className="success">
              <span className="none">Add Buddy</span>
            </a>
          </div>
        </div>
        <div className="col-sm-5">
          <p className="text-md profile-status">{user_to_display.get('about_me')}</p>
          <p>Trusted user since {D.format('MMMM D YYYY', new Date(user_to_display.get('date_created')))}</p>
          <button
            className="btn btn-sm rounded btn-outline b-success"
            onClick={open_editing_panel_for_user_with_id(user_to_display.get('id'))}
          >Edit</button>
        </div>
      </div>
    </div>
    <div
      className = {classnames('user-edit-panel', {
        open: user_to_display.get('is_edit_detail_panel_open')
      })}
    >
      <div
        className='edit-panel-close-box bg-danger'
        onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
      ></div>
    </div>
    <div
      className="user-edit-panel-overlay"
      onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
    ></div>
  </div>;

const map_state_to_props = ({users}, own_props) => {
  const user_to_display = users
    .get(own_props.params.user_id, Map({needs_to_be_fetched: true}))
    .set('id', own_props.params.user_id);
  return {
    user_to_display,
  };
};

const map_dispatch_to_props = dispatch => {
  const open_editing_panel_for_user_action = bindActionCreators(open_editing_panel_for_user, dispatch);
  const open_editing_panel_for_user_with_id = user_id => () => open_editing_panel_for_user_action(user_id);

  const close_editing_panel_for_user_action = bindActionCreators(close_editing_panel_for_user, dispatch);
  const close_editing_panel_for_user_with_id = user_id => () => close_editing_panel_for_user_action(user_id);

  return {
    open_editing_panel_for_user_with_id,
    close_editing_panel_for_user_with_id
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_view_user_component);
