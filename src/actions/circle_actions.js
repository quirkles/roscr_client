import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES,
  CLAIM_PAYOUT_SPOT_ON_CIRCLE
} from '../constants/circle_constants';

import {
  do_find_circle_by_id,
  do_create_circle,
  do_find_many_circles_by_ids
} from '../utils/requests/circle';

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

export const add_circle = circle_data => ({
  type: ADD_CIRCLE,
  circle_data
});

export const add_circles = circle_list => ({
  type: ADD_CIRCLES,
  circle_list
});

export const find_circle_by_id = target_circle_id =>
  dispatch =>
    do_find_circle_by_id(target_circle_id)
    .then(
      ({data}) => {
        if (data.success && data.circle) {
          dispatch(add_circle(data.circle));
        }
      },
      error => {
        if (error.response.data.error_code === 'CIRCLE_NOT_FOUND') {
          dispatch(add_circle({
            id: target_circle_id,
            circle_not_found_in_db: true
          }));
        }
      }
    );

export const find_many_circles_by_ids = circle_id_array =>
  dispatch =>
    do_find_many_circles_by_ids(circle_id_array)
    .then(response_array => {
      const circles = response_array
        .map(resp => resp.data.success ?
            resp.data.circle :
            {
              id: resp.data.missing_circle_id,
              circle_not_found_in_db: true
            });
        dispatch(add_circles(circles));
    });

export const attempt_create_circle = circle_data =>
  dispatch =>
    do_create_circle(circle_data)
      .then(
        ({data}) => dispatch(add_circle(data.circle)),
        error => console.log(error)
      );
