import React from 'react';
import {format} from 'date-fp';
import classnames from 'classnames';
import {Link} from 'react-router';

import {get_random_element_from_array} from '../../../utils/array';
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

const get_random_bg_color = () => get_random_element_from_array([
  'yellow', 'info', 'success', 'danger'
]);

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
        <div className={classnames('w-40', 'circle', get_random_bg_color())}>
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
