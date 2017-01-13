import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './circle_card_styles.scss';

import CircleCard from './circle_card';

const unconnected_circles_component = ({circles}) =>
<div className='padding circles-component'>
  <div className='row'>
    {circles.map((circle, circle_id) => circle.set('id', circle_id)).toList().map(circle =>
      <CircleCard
        key={circle.get('id')}
        circle={circle}
      />
    )}
  </div>
</div>;

const map_state_to_props = ({circles}) => ({circles});

export default connect(map_state_to_props)(unconnected_circles_component);
