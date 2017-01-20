import React from 'react';
import {Map, List} from 'immutable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './circle_card_styles.scss';

import {update_circle_pagination_filter} from '../../actions/circle_pagination_actions';
import {find_many_circles_with_params} from '../../actions/circle_actions';

import CircleCard from './circle_card';
import CirclesFilter from './circles_filter';
import FetchingCircles from './fetching_circles';

const unconnected_circles_component = ({
  circles,
  circle_pagination,
  update_circle_pagination_filter_action,
  fetch_circles
}) => {
  if (circle_pagination.get('fetch_state') === 'unfetched') {
    fetch_circles(circle_pagination.get('filter').toJS());
  }
  return (
    <div className='padding circles-component'>
      <div className='row'>
        <CirclesFilter
          circle_pagination_filter={circle_pagination.get('filter')}
          update_circle_pagination_query={e => update_circle_pagination_filter_action({query: e.target.value})}
          update_circle_pagination_cycle_period={e => update_circle_pagination_filter_action({cycle_period: e.target.value})}
          update_circle_pagination_participant_count={e => update_circle_pagination_filter_action({participant_count: e.target.value})}
        />
      </div>
      <div className='row'>
        {circle_pagination.get('fetch_state') === 'unfetched' ?
          <FetchingCircles/> :
          circles.map((circle, circle_id) => circle.set('id', circle_id)).toList().map(circle =>
            <CircleCard
              key={circle.get('id')}
              circle={circle}
            />
          )
        }
      </div>
    </div>
  );
};

const map_state_to_props = ({circles, circle_pagination}) => ({
  circles: circle_pagination
    .get('circle_ids', List([]))
    .map(circle_id => circles
      .get(circle_id, Map({
        needs_to_be_fetched: true,
        id: circle_id
      }))
    ),
  circle_pagination
});

const map_dispatch_to_props = dispatch => ({
  update_circle_pagination_filter_action: bindActionCreators(update_circle_pagination_filter, dispatch),
  fetch_circles: bindActionCreators(find_many_circles_with_params, dispatch)
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_circles_component);
