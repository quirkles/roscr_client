import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './circle_card_styles.scss';

import {update_filter} from '../../actions/circle_pagination_actions';

import CircleCard from './circle_card';
import CirclesFilter from './circles_filter'

const unconnected_circles_component = ({circles, circle_pagination, update_circle_pagination_filter}) =>
<div className='padding circles-component'>
  <div className='row'>
    <CirclesFilter
      circle_pagination_filter={circle_pagination.get('filter')}
      update_circle_pagination_query={e => update_circle_pagination_filter({query: e.target.value})}
    />
  </div>
  <div className='row'>
    {circles.map((circle, circle_id) => circle.set('id', circle_id)).toList().map(circle =>
      <CircleCard
        key={circle.get('id')}
        circle={circle}
      />
    )}
  </div>
</div>;

const map_state_to_props = ({circles, circle_pagination}) => ({circles, circle_pagination});

const map_dispatch_to_props = dispatch => ({
  update_circle_pagination_filter: bindActionCreators(update_filter, dispatch)
})

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_circles_component);
