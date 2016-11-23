import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import CircleInformation from './circle_information';

export const unconnected_create_circle_component = ({
  circle_to_display
}) =>
  <div className='row'>
    <div className='col-lg-12 col-xl-6'>
      <CircleInformation
        circle_to_display = {circle_to_display}
      />
    </div>
  </div>;

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles}, own_props) => ({
  circle_to_display: circles.get(own_props.params.circle_id)
});

const map_dispatch_to_props = dispatch => ({dispatch});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
