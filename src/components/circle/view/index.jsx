import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map} from 'immutable';

import {pick} from '../../../utils/immutable';

import {show_tooltip, destroy_tooltip} from '../../../actions/ui_state_actions';
import {claim_payout_spot_on_circle, find_circle_by_id} from '../../../actions/circle_actions';

import CircleComponent from './circle_component';
import Loader from '../../loader';
import NotFound from '../../not_found';

import './view_circle_styles.scss';

export const unconnected_create_circle_component = ({
  circle_to_display,
  circle_members,
  session_user_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id,
  claim_payout_event_for_user,
  do_find_circle_by_id
}) => {
  if (circle_to_display.get('needs_to_be_fetched')) {
    do_find_circle_by_id(circle_to_display.get('id'));
    return <Loader title='Fetching circle information...' />;
  } else if (circle_to_display.get('circle_not_found_in_db')) {
    return <NotFound message="Sorry, we couldn't find that circle." />;
  } else {
    return (
      <CircleComponent
        circle_to_display={circle_to_display}
        circle_members={circle_members}
        session_user_id={session_user_id}
        show_tooltip_with_data={show_tooltip_with_data}
        destroy_tooltip_with_id={destroy_tooltip_with_id}
        claim_payout_event_for_user={claim_payout_event_for_user}
      />
    );
  }
};

const populate_payout_events_with_users = users => payout_events =>
  payout_events.map(poe => !poe.get('recipient_id') ? poe :
    poe.set('recipient',
      pick(
        ['firstname', 'lastname', 'needs_to_be_fetched'],
        users.get(poe.get('recipient_id'), Map({needs_to_be_fetched: true}))
      ).set('id', poe.get('recipient_id'))
    )
  );

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles, users, session_user_id}, own_props) => {
  const circle_to_display = circles
    .get(own_props.params.circle_id, Map({needs_to_be_fetched: true}))
    .set('id', own_props.params.circle_id)
    .update('payout_events', Map({}), populate_payout_events_with_users(users));

  const circle_members = circle_to_display
    .get('members', Map({}))
    .map(m => users.get(m, Map({needs_to_be_fetched: true}))
      .set('id', m));
  return {
    circle_to_display,
    circle_members,
    session_user_id
  };
};

const map_dispatch_to_props = dispatch => {
  const show_tooltip_action = bindActionCreators(show_tooltip, dispatch);
  const show_tooltip_with_data = tooltip_data => e => show_tooltip_action(tooltip_data, e.target);

  const destroy_tooltip_action = bindActionCreators(destroy_tooltip, dispatch);
  const destroy_tooltip_with_id = tooltip_id => () => destroy_tooltip_action(tooltip_id);

  const claim_payout_spot_on_circle_action = bindActionCreators(claim_payout_spot_on_circle, dispatch);
  const claim_payout_event_for_user =
    user_id =>
      circle_id =>
        payout_event_id =>
          () => claim_payout_spot_on_circle_action({user_id, circle_id, payout_event_id});

  const do_find_circle_by_id = bindActionCreators(find_circle_by_id, dispatch);

  return {
    show_tooltip_with_data,
    destroy_tooltip_with_id,
    claim_payout_event_for_user,
    do_find_circle_by_id
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
