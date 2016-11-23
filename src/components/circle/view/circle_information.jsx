import React from 'react';
import {format} from 'date-fp';

const get_contribution_value = (withdrawal_value, participant_count) => {
  const contribution_value = parseFloat(withdrawal_value, 10) / parseInt(participant_count, 10);
  return Number.isNaN(contribution_value) ?
    'Contribution value is calculated from the withdrawal value and number of particiapnts' :
    `$${contribution_value.toFixed(2)}`;
};

export default ({circle_to_display}) =>
<div className='box'>
  <div className='box-header blue-grey'>
    <h2 className='padding'>{circle_to_display.get('circle_name')}</h2>
  </div>
  <div className='box-body'>
    <table className="table">
      <tbody>
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
  </div>
</div>;
