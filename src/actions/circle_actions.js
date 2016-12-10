import {EDIT_CIRCLE} from '../constants/circle_constants';
import {CLAIM_PAYOUT_SPOT_ON_CIRCLE} from '../constants/circle_constants';

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
