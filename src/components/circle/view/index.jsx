import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map} from 'immutable';

import CircleMemberList from './circle_member_list';
import CircleInformation from './circle_information';

import './view_circle_styles.scss';

export const unconnected_create_circle_component = ({
  circle_to_display,
  circle_members
}) =>
  <div className='row '>
    <div className='col-lg-12 col-xl-6'>
      <CircleInformation
        circle_to_display = {circle_to_display}
      />
    </div>
    <div className='col-lg-12 col-xl-6'>
      <CircleMemberList
        circle_members = {circle_members}
      />
    </div>
  </div>;

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles, members}, own_props) => {
  const circle_to_display = circles.get(own_props.params.circle_id);
  const circle_members = circle_to_display
    .get('members')
    .map(m => members.get(m, Map({needs_to_be_fetched: true}))
      .set('id', m));
  return {
    circle_to_display,
    circle_members
  };
};

const map_dispatch_to_props = dispatch => ({dispatch});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
