import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';
import D from 'date-fp';

import {get_activity_description_from_type} from '../../../utils/activity_helpers';

import {
  open_editing_panel_for_user,
  close_editing_panel_for_user,
  start_editing_attr_for_user,
  find_user_by_id,
  edit_user,
  save_user_changes
} from '../../../actions/user_actions';

import {find_many_circles_by_ids} from '../../../actions/circle_actions';

import UserProfileHeader from './user_profile_header';
import UserEditPanel from './user_edit_panel';
import CircleList from './circle_list';
import Loader from '../../loader';
import NotFound from '../../not_found';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display,
  circles_as_member,
  circles_created,
  open_editing_panel_for_user_with_id,
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
  } else {
    const circle_ids_to_be_fetched =
      circles_as_member
        .concat(circles_created)
        .filter(circle => circle.get('needs_to_be_fetched'))
        .map(circle => circle.get('id'))
        .toJS();

    do_find_many_circles_by_ids(circle_ids_to_be_fetched);

    return (
      <div className="view-user-component">
        <UserProfileHeader
          user_to_display={user_to_display}
          open_editing_panel_for_user_with_id={open_editing_panel_for_user_with_id}
        />
        <div className="padding">
          <div className='row margin-top-two'>
            <div className='col-lg-12 col-xl-6'>
              <CircleList
                panel_title='Circles As Member'
                circles={circles_as_member}
              />
              <CircleList
                panel_title='Circles As Creator'
                circles={circles_created}
              />
            </div>
            <div className='col-lg-12 col-xl-6'>
              <div className='box'>
                <div className='box-header warn'>
                  <h2 className='padding-half'>
                    <i className='fa fa-history padding-right-one'/>
                    Activity History
                  </h2>
                </div>
                <div className='box-body'>
                  <div>
                    <div className='streamline m-b'>
                      {
                        user_to_display.get('activity').map(activity_item =>
                          <div
                            key={activity_item.get('id')}
                            className='sl-item'
                          >
                            <div className='sl-content'>
                              <div className='sl-date text-muted'>{D.format('MMMM D YYYY', new Date(activity_item.get('date')))}</div>
                              <p>{get_activity_description_from_type(activity_item.get('activity_type'))}</p>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserEditPanel
          user_to_display={user_to_display}
          close_editing_panel_for_user_with_id={close_editing_panel_for_user_with_id}
          start_editing_attr_for_user_with_id={start_editing_attr_for_user_with_id(user_to_display.get('id'))}
          edit_user_attr_with_id={edit_user_attr_with_id(user_to_display.get('id'))}
          stop_editing_and_do_update_attr={stop_editing_and_do_update_attr_for_user(user_to_display.get('id'))}
        />
        <div
          className="user-edit-panel-overlay"
          onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
        ></div>
      </div>
    );
  }
};

const map_state_to_props = ({users, circles}, own_props) => {
  const user_to_display = users
    .get(own_props.params.user_id, Map({needs_to_be_fetched: true}))
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

  return {
    user_to_display,
    circles_as_member,
    circles_created
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
