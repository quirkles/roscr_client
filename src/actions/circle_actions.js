import {push} from 'react-router-redux';

import {
  EDIT_CIRCLE,
  ADD_CIRCLE,
  ADD_CIRCLES,
  CLAIM_PAYOUT_SPOT_ON_CIRCLE,
  HANDLE_FIND_CIRCLES_SUCCESS,
  BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER
} from '../constants/circle_constants';

import {
  do_find_circle_by_id,
  do_create_circle,
  do_find_many_circles_by_ids,
  do_find_many_circles_with_params
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

export const begin_editing_circle_savings_goal_for_user = ({circle_id, user_id}) => ({
  type: BEGIN_EDITING_CIRCLE_SAVINGS_GOAL_FOR_USER,
  circle_id, user_id
});

const handle_find_circles_success = circle_list => ({
  type: HANDLE_FIND_CIRCLES_SUCCESS,
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

export const find_many_circles_with_params = params =>
  dispatch =>
    do_find_many_circles_with_params(params)
      .then(({data}) => {
        dispatch(handle_find_circles_success(data.circles));
      });

export const attempt_create_circle = circle_data =>
  dispatch =>
    do_create_circle(circle_data)
      .then(
        ({data}) => {
          dispatch(add_circle(data.circle));
          dispatch(push(`/circles/${data.circle.id}`));
        },
        error => console.log(error)
      );
