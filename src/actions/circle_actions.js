import {EDIT_CIRCLE} from '../constants/circle_constants';

export const edit_circle = ({circle_id, circle_data}) => ({
  type: EDIT_CIRCLE,
  circle_id,
  circle_data
});
