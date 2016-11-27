import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map} from 'immutable';

import {show_tooltip, destroy_tooltip} from '../../../actions/tooltip_actions';

import CircleMemberList from './circle_member_list';
import CircleInformation from './circle_information';

import './view_circle_styles.scss';

export const unconnected_create_circle_component = ({
  circle_to_display,
  circle_members,
  show_tooltip_with_data,
  destroy_tooltip_with_id
}) =>
  <div className='row view-circle-component'>
    <div className='col-lg-12 col-xl-6'>
      <CircleInformation
        circle_to_display = {circle_to_display}
      />
    </div>
    <div className='col-lg-12 col-xl-6'>
      <CircleMemberList
        circle_members = {circle_members}
        circle_id = {circle_to_display.get('id')}
        show_tooltip_with_data = {show_tooltip_with_data}
        destroy_tooltip_with_id = {destroy_tooltip_with_id}
      />
    </div>
  </div>;

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles, users}, own_props) => {
  const circle_to_display = circles
    .get(own_props.params.circle_id)
    .set('id', own_props.params.circle_id);

  const circle_members = circle_to_display
    .get('members')
    .map(m => users.get(m, Map({needs_to_be_fetched: true}))
      .set('id', m));

  return {
    circle_to_display,
    circle_members
  };
};

const map_dispatch_to_props = dispatch => {
  const show_tooltip_action = bindActionCreators(show_tooltip, dispatch);
  const show_tooltip_with_data = tooltip_data => e => show_tooltip_action(tooltip_data, e.target);

  const destroy_tooltip_action = bindActionCreators(destroy_tooltip, dispatch);
  const destroy_tooltip_with_id = tooltip_id => () => destroy_tooltip_action(tooltip_id);

  return {
    show_tooltip_with_data,
    destroy_tooltip_with_id
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
