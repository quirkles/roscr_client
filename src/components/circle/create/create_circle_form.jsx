import React from 'react';
import D from 'date-fp';

const get_contribution_value = (withdrawal_value, participant_count) => {
  const contribution_value = parseFloat(withdrawal_value, 10) / parseInt(participant_count, 10);
  return Number.isNaN(contribution_value) ?
    'Contribution value is calculated from the withdrawal value and number of particiapnts' :
    `$${contribution_value.toFixed(2)}`;
};
export default ({
  new_circle,
  edit_circle,
  edit_circle_attr,
  set_hover_hint_to_section
}) =>
  <form>
    <div className='box'>
      <div className='box-header indigo'>
        <h2 className='padding'>Create Circle</h2>
      </div>
      <div className='box-body'>
        <p className='text-muted'>Enter the information you want to use to create this circle with below.</p>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('circle_name')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label>Circle Name</label>
          <input
            type = 'text'
            className = 'form-control'
            value = {new_circle.get('circle_name')}
            onChange={edit_circle_attr('circle_name')}
            placeholder = 'My New Circle'
          />
        </div>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('participant_count')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label>Particpant Count</label>
          <select
            className='form-control'
            value={new_circle.get('participant_count')}
            onChange = {edit_circle_attr('participant_count')}
          >
            {Array
            .from({length: 9}, (v, k) => k + 4)
            .map((v) =>
              <option
                key={v}
                value={v}
              >{v}</option>
            )}
          </select>
        </div>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('withdrawal_amount')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label className='control-label'>Desired Withdrawal Value</label>
          <input
            type = 'number'
            className = 'form-control'
            placeholder = '$100'
            value = {new_circle.get('withdrawal_amount') || ''}
            onChange = {edit_circle_attr('withdrawal_amount')}
            step = '10'
          />
        </div>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('cycle_period')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label className='control-label'>Savings Cycle Length</label>
          <select
            className='form-control'
            value = {new_circle.get('cycle_period')}
            onChange = {edit_circle_attr('cycle_period')}
          >
            <option disabled>-- Select Cycle Length --</option>
            <option value='weekly'>Weekly</option>
            <option value='bi-weekly'>Bi-Weekly</option>
            <option value='monthly'>Monthly</option>
          </select>
        </div>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('start_date')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label className='control-label'>Start date</label>
          <input
            type='date'
            className='form-control'
            value={D.format('YYYY-MM-DD', new_circle.get('start_date'))}
            onChange = {e => edit_circle({
              circle_id: 'new_circle',
              circle_data: {
                start_date: new Date(e.target.value)
              }
            })}
          />
        </div>
        <div
          className='form-group'
          onMouseEnter={set_hover_hint_to_section('contribution_amount')}
          onMouseLeave={set_hover_hint_to_section(null)}
        >
          <label className='control-label'>Contribution amount (per user per cycle)</label>
          <input
            type='text'
            readOnly
            className='form-control'
            value={get_contribution_value(new_circle.get('withdrawal_amount'), new_circle.get('participant_count'))}
          />
        </div>
        <div className='button-list'>
          <button className='btn btn-primary w-sm'>Submit</button>
        </div>
      </div>
    </div>
  </form>

