import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';

import {
  open_editing_panel_for_user,
  close_editing_panel_for_user,
  start_editing_attr_for_user,
  edit_user
} from '../../../actions/user_actions';

import UserProfileHeader from './user_profile_header';
import UserEditPanel from './user_edit_panel';
import CircleList from './circle_list';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display,
  circles_as_member,
  open_editing_panel_for_user_with_id,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  edit_user_attr_with_id
}) =>
  <div className="view-user-component">
    <UserProfileHeader
      user_to_display={user_to_display}
      open_editing_panel_for_user_with_id={open_editing_panel_for_user_with_id}
    />
    <div className='row margin-top-two'>
      <div className='col-lg-12 col-xl-6'>
        <CircleList
          panel_title='Circles As Member'
          circles={circles_as_member}
        />
      </div>
    </div>
    <UserEditPanel
      user_to_display={user_to_display}
      close_editing_panel_for_user_with_id={close_editing_panel_for_user_with_id}
      start_editing_attr_for_user_with_id={start_editing_attr_for_user_with_id(user_to_display.get('id'))}
      edit_user_attr_with_id={edit_user_attr_with_id(user_to_display.get('id'))}
  ></UserEditPanel>
  <div
    className="user-edit-panel-overlay"
    onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
  ></div>
  </div>;

const map_state_to_props = ({users, circles}, own_props) => {
  const user_to_display = users
    .get(own_props.params.user_id, Map({needs_to_be_fetched: true}))
    .set('id', own_props.params.user_id);
  const circles_as_member = user_to_display.get('needs_to_be_fetched', false) ?
    List({}) :
    user_to_display
      .get('circles_as_member', List([]))
      .map(c_id => circles.get(c_id, Map({'needs_to_be_fetched': true}))
        .set('id', c_id));
  return {
    user_to_display,
    circles_as_member
  };
};

const map_dispatch_to_props = dispatch => {
  const open_editing_panel_for_user_action = bindActionCreators(open_editing_panel_for_user, dispatch);
  const open_editing_panel_for_user_with_id = user_id =>
    () => open_editing_panel_for_user_action(user_id);

  const close_editing_panel_for_user_action = bindActionCreators(close_editing_panel_for_user, dispatch);
  const close_editing_panel_for_user_with_id = user_id =>
    () => close_editing_panel_for_user_action(user_id);

  const start_editing_attr_for_user_action = bindActionCreators(start_editing_attr_for_user, dispatch);
  const start_editing_attr_for_user_with_id = user_id =>
    attr_to_edit => () => start_editing_attr_for_user_action({user_id, attr_to_edit});

  const edit_user_action = bindActionCreators(edit_user, dispatch);
  const edit_user_attr_with_id = user_id =>
    attr_to_edit => e => edit_user_action({user_id, user_data: Map({}).set(attr_to_edit, e.target.value)});

  return {
    open_editing_panel_for_user_with_id,
    close_editing_panel_for_user_with_id,
    start_editing_attr_for_user_with_id,
    edit_user_attr_with_id
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_view_user_component);
