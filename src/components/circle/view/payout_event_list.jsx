import React from 'react';
import {format} from 'date-fp';
import classnames from 'classnames';
import {Link} from 'react-router';

import {capitalize} from '../../../utils/string';

const get_badge_content = recipient =>
  recipient === 'NONE' ?
    <i className='fa fa-question'></i> :
      recipient.get('needs_to_be_fetched') ?
    <i className='fa fa-spinner fa-spin'></i> :
    <div>{recipient.get('firstname').charAt(0)}{recipient.get('lastname').charAt(0)}</div>;

const get_name_content = recipient =>
  recipient === 'NONE' ?
    <small className='block text-muted'>Payout spot not yet claimed.</small> :
      recipient.get('needs_to_be_fetched') ?
    <small className='block text-muted'>Fetching user information.</small> :
    <small className='block text-muted'>
      <Link
        to={`/users/${recipient.get('id')}`}
      >
        {capitalize(recipient.get('firstname'))} {capitalize(recipient.get('lastname'))}
      </Link>
    </small>;

const bg_colors = ['blue-500', 'green-500', 'pink-500', 'red-500', 'amber-500', 'purple-500'];

const get_poe_bg_color = payout_event => {
  const unique_int = payout_event
  .get('id', '')
  .split('')
  .map(c => parseInt(c, 10))
  .filter(c => !isNaN(c))
  .reduce((sum, int) => sum + int, 0);
  return bg_colors[unique_int % bg_colors.length];
};

const payout_event_list_component = ({
  payout_events,
  claim_payout_event_with_id
}) =>
<div className='list box payout-event-list'>
  {payout_events.map((payout_event, index) =>
    <div key = {index} className='list-item'>
      {payout_event.get('recipient_id') ? '' :
        <div className="list-right">
          <button
            className = 'btn yellow'
            onClick = {claim_payout_event_with_id(payout_event.get('id'))}
          >Claim Spot</button>
        </div>
      }
      <div className='list-left'>
        <div className={classnames('w-40', 'circle', get_poe_bg_color(payout_event))}>
          {get_badge_content(payout_event.get('recipient', 'NONE'))}
        </div>
      </div>
      <div className='list-body'>
        <span className='_500'>
          {format('ddds DD MMMM YY', new Date(payout_event.get('date')))}
        </span>
        {get_name_content(payout_event.get('recipient', 'NONE'))}
      </div>
    </div>
  )}
</div>;

export default payout_event_list_component;
