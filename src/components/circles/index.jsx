import React from 'react';
import {Map, List} from 'immutable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './circles_styles.scss';

import {update_circle_pagination_filter} from '../../actions/circle_pagination_actions';
import {find_many_circles_with_params} from '../../actions/circle_actions';

import CircleCard from './circle_card';
import CirclesFilter from './circles_filter';
import CirclesHeader from './circles_header';
import FetchingCircles from './fetching_circles';
import NoCircles from '../not_found';

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
    <div className='circles-component'>
      <CirclesHeader/>
      <div className="padding">
        <div className='row'>
          <CirclesFilter
            circle_pagination_filter={circle_pagination.get('filter')}
            update_circle_pagination_query={e => update_circle_pagination_filter_action({query: e.target.value})}
            update_circle_pagination_cycle_period={e => update_circle_pagination_filter_action({cycle_period: e.target.value})}
            update_circle_pagination_participant_count={participant_count => update_circle_pagination_filter_action({participant_count})}
            update_circle_pagination_withdrawal_amount={withdrawal_amount => update_circle_pagination_filter_action({withdrawal_amount})}
          />
        </div>
        <div className='row'>
          {circle_pagination.get('fetch_state') === 'unfetched' ?
            <FetchingCircles/> :
            circles.size === 0 ?
            <NoCircles message='Sorry! No circles match that search.'/> :
            circles.map(circle =>
              <CircleCard
                key={circle.get('id')}
                circle={circle}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

const map_state_to_props = ({circles, users, circle_pagination}) => ({
  circles: circle_pagination
    .get('circle_ids', List([]))
    .map(circle_id => circles.get(circle_id, null) ?
      circles.get(circle_id)
        .set('id', circle_id)
        .update('created_by', id => users.get(id, Map({
          needs_to_be_fetched: true,
          id
        }))) :
      Map({
        needs_to_be_fetched: true,
        id: circle_id
      })
    ),
  circle_pagination
});

const map_dispatch_to_props = dispatch => ({
  update_circle_pagination_filter_action: bindActionCreators(update_circle_pagination_filter, dispatch),
  fetch_circles: bindActionCreators(find_many_circles_with_params, dispatch)
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_circles_component);
