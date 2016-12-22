import {fromJS} from 'immutable';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  CLAIM_PAYOUT_SPOT_ON_CIRCLE
} from '../constants/circle_constants';

import {
  do_find_circle_by_id,
} from '../utils/requests/circle';

import {omit} from 'ramda';

export const edit_circle = ({circle_id, circle_data}) => ({
  type: EDIT_CIRCLE,
  circle_id,
  circle_data
});

export const claim_payout_spot_on_circle = ({circle_id, payout_event_id, user_id}) => ({
  type: CLAIM_PAYOUT_SPOT_ON_CIRCLE,
  circle_id,
  payout_event_id,
  user_id
});

export const add_circle = ({circle_id, circle_data}) => ({
  type: ADD_CIRCLE,
  circle_id,
  circle_data,
});

export const find_circle_by_id = target_circle_id =>
  dispatch =>
    do_find_circle_by_id(target_circle_id)
    .then(
      ({data}) => {
        if (data.success && data.circle) {
          dispatch(add_circle(parse_circle_data(data.circle)))
        }
      },
      error => {
        if (error.response.data.error_code === 'CIRCLE_NOT_FOUND') {
          dispatch(add_circle(parse_circle_data({
            id: target_circle_id,
            circle_not_found_in_db: true
          })))
        }
      }
    );

const parse_circle_data = circle_data => ({
  circle_id: circle_data.id,
  circle_data: fromJS(omit(['id'], circle_data))
});
