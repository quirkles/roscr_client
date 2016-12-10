import React from 'react';
import {format} from 'date-fp';
import classnames from 'classnames';

import {get_random_element_from_array} from '../../../utils/array'

const get_badge_content = recipient =>
  recipient === 'NONE' ?
    <i className='fa fa-question'></i>:
    <div>AB</div>;

const get_random_bg_color = () => get_random_element_from_array([
  'yellow', 'info', 'success', 'danger'
]);

const payout_event_list_component = ({payout_events}) =>
<div className='list box payout-event-list'>
  {payout_events.map((payout_event, index) =>
    <div key = {index} className='list-item'>
      {payout_event.get('recipient_id') ? '' :
        <div className="list-right">
          <button className='btn yellow'>Claim Spot</button>
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
        <small className='block text-muted'>{payout_event.get('recipient', 'Payout spot not yet claimed.')}</small>
      </div>
    </div>
  )}
</div>;

export default payout_event_list_component;
