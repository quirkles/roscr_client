import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';

import {
  open_editing_panel_for_user,
  close_editing_panel_for_user,
  start_editing_attr_for_user,
  find_user_by_id,
  edit_user,
  save_user_changes,
  open_invite_user_to_circle_modal as open_invite_user_to_circle_modal_action
} from '../../../actions/user_actions';

import {find_many_circles_by_ids} from '../../../actions/circle_actions';

import {
  open_add_user_to_circle_dropdown as open_add_user_to_circle_dropdown_action,
  close_add_user_to_circle_dropdown as close_add_user_to_circle_dropdown_action
} from '../../../actions/ui_state_actions';

import ViewUserComponent from './view_user_component';
import MissingSessionUser from './missing_session_user';

import Loader from '../../loader';
import NotFound from '../../not_found';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display,
  circles_as_member,
  circles_created,
  circles_user_can_be_invited_to,
  is_invite_member_to_circles_dropdown_open,
  open_editing_panel_for_user_with_id,
  open_invite_user_to_circle_modal,
  open_add_user_to_circle_dropdown,
  close_add_user_to_circle_dropdown,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  edit_user_attr_with_id,
  do_find_user_by_id,
  do_find_many_circles_by_ids,
  stop_editing_and_do_update_attr_for_user
}) => {
  if (user_to_display.get('needs_to_be_fetched')) {
    do_find_user_by_id(user_to_display.get('id'));
    return (
      <Loader
        title='Fetching User Information...'
      />
    );
  } else if (user_to_display.get('user_not_found_in_db')) {
    return <NotFound message="Sorry, we couldn't find that user"/>;
  } else if (user_to_display.get('missing_session_user')) {
    return <MissingSessionUser/>;
  } else {
    const circle_ids_to_be_fetched =
      circles_as_member
        .concat(circles_created)
        .filter(circle => circle.get('needs_to_be_fetched'))
        .map(circle => circle.get('id'))
        .toJS();

    if (circle_ids_to_be_fetched.length) {
      do_find_many_circles_by_ids(circle_ids_to_be_fetched);
    }

    return (
      <ViewUserComponent
        user_to_display = {user_to_display}
        circles_user_can_be_invited_to={circles_user_can_be_invited_to}
        is_invite_member_to_circles_dropdown_open={is_invite_member_to_circles_dropdown_open}
        open_editing_panel_for_user_with_id = {open_editing_panel_for_user_with_id}
        open_add_user_to_circle_dropdown={open_add_user_to_circle_dropdown}
        open_invite_user_to_circle_modal={circle_id => () => open_invite_user_to_circle_modal({user_id: user_to_display.get('id'), circle_id})}
        close_add_user_to_circle_dropdown={close_add_user_to_circle_dropdown}
        close_editing_panel_for_user_with_id = {close_editing_panel_for_user_with_id}
        start_editing_attr_for_user_with_id = {start_editing_attr_for_user_with_id}
        stop_editing_and_do_update_attr_for_user = {stop_editing_and_do_update_attr_for_user}
        edit_user_attr_with_id = {edit_user_attr_with_id}
        circles_as_member = {circles_as_member}
        circles_created = {circles_created}
      />
    );
  }
};

const map_state_to_props = ({users, circles, session_user, ui_state}, own_props) => {
  const user_to_display_id = own_props.params.user_id === 'me' ?
    session_user.get('id') :
    own_props.params.user_id;

  const user_to_display = user_to_display_id === null ?
    Map({'missing_session_user': true}) :
    users
      .get(user_to_display_id, Map({needs_to_be_fetched: true}))
      .set('id', own_props.params.user_id);

  const circles_as_member = user_to_display.get('needs_to_be_fetched', false) ?
    List([]) :
    user_to_display
      .get('circles_as_member', List([]))
      .map(c_id => circles.get(c_id, Map({'needs_to_be_fetched': true}))
        .set('id', c_id));

  const circles_created = user_to_display.get('needs_to_be_fetched', false) ?
    List([]) :
    user_to_display
      .get('circles_created', List([]))
      .map(c_id => circles.get(c_id, Map({'needs_to_be_fetched': true}))
        .set('id', c_id));

  const is_invite_member_to_circles_dropdown_open = ui_state.getIn(['add_user_to_circle_dropdowns', user_to_display_id], false);

  const circles_user_can_be_invited_to = circles
    .filter(circle => circle.get('members').includes(session_user.get('id')) && !circle.get('members').includes(user_to_display_id))
    .map((c, id) => c.set('id', id))
    .toList();

  return {
    user_to_display,
    circles_as_member,
    circles_created,
    circles_user_can_be_invited_to,
    is_invite_member_to_circles_dropdown_open
  };
};

const map_dispatch_to_props = dispatch => {
  const save_user_changes_action = bindActionCreators(save_user_changes, dispatch);

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

  const do_find_user_by_id = bindActionCreators(find_user_by_id, dispatch);

  const stop_editing_and_do_update_attr_for_user = user_id => attr_name => e => {
    let new_user_data = {};

    start_editing_attr_for_user_action({
      user_id,
      attr_to_edit: null
    });

    new_user_data[attr_name] = e.target.value;
    save_user_changes_action({
      user_id,
      new_user_data
    });
  };

  const do_find_many_circles_by_ids = bindActionCreators(find_many_circles_by_ids, dispatch);

  return {
    open_add_user_to_circle_dropdown: bindActionCreators(open_add_user_to_circle_dropdown_action, dispatch),
    close_add_user_to_circle_dropdown: bindActionCreators(close_add_user_to_circle_dropdown_action, dispatch),
    open_invite_user_to_circle_modal: bindActionCreators(open_invite_user_to_circle_modal_action, dispatch),
    open_editing_panel_for_user_with_id,
    close_editing_panel_for_user_with_id,
    start_editing_attr_for_user_with_id,
    edit_user_attr_with_id,
    do_find_user_by_id,
    do_find_many_circles_by_ids,
    stop_editing_and_do_update_attr_for_user
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_view_user_component);
