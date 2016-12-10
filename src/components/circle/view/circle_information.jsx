import React from 'react';
import {format} from 'date-fp';

import PayoutEventList from './payout_event_list';

const get_contribution_value = (withdrawal_value, participant_count) => {
  const contribution_value = parseFloat(withdrawal_value) / parseInt(participant_count, 10);
  return Number.isNaN(contribution_value) ?
    'Contribution value is calculated from the withdrawal value and number of particiapnts' :
    `$${contribution_value.toFixed(2)}`;
};

export default ({
  circle_to_display,
  claim_payout_event_on_circle
}) =>
<div className='box circle-details-pane'>
  <div className='box-header yellow'>
    <h2 className='padding-half serif bold'>
      <i className='fa fa-circle-o padding-right-one'></i>
      Circle Details
    </h2>
  </div>
  <div className='box-body'>
    <table className="table">
      <tbody>
      <tr>
        <td>Circle Name</td>
        <td className='font-weight-600'>{circle_to_display.get('circle_name')}</td>
      </tr>
      <tr>
        <td>Number of Participants</td>
        <td className='font-weight-600'>{circle_to_display.get('participant_count')}</td>
      </tr>
      <tr>
        <td>Withdrawal Amount</td>
        <td className='font-weight-600'>${circle_to_display.get('withdrawal_amount')}</td>
      </tr>
      <tr>
        <td>Circle Period</td>
        <td className='font-weight-600 text-capitalize'>{circle_to_display.get('cycle_period')}</td>
      </tr>
      <tr>
        <td>Start Date</td>
        <td className='font-weight-600 text-capitalize'>{format('MMMM DD YYYY', new Date(circle_to_display.get('start_date')))}</td>
      </tr>
      <tr>
        <td>Cycle Contribution Amount</td>
        <td className='font-weight-600 text-capitalize'>{get_contribution_value(circle_to_display.get('withdrawal_amount'), circle_to_display.get('participant_count'))}</td>
      </tr>
      </tbody>
    </table>
    <h4 className='margin-top-one text-center serif'>Payout Schedule</h4>
    <PayoutEventList
      payout_events = {circle_to_display.get('payout_events')}
      claim_payout_event_with_id = {claim_payout_event_on_circle(circle_to_display.get('id'))}
    />
  </div>
</div>;
