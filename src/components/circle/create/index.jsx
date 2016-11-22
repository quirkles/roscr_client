import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import D from 'date-fp';

import * as circle_actions from '../../../actions/circle_actions';

const get_contribution_value = (withdrawal_value, participant_count) => {
  const contribution_value = parseFloat(withdrawal_value, 10) / parseInt(participant_count, 10);
  return Number.isNaN(contribution_value) ?
    'Contribution value is calculated from the withdrawal value and number of particiapnts' :
    `$${contribution_value.toFixed(2)}`;
};

export const unconnected_create_circle_component = ({
  new_circle,
  edit_circle,
  edit_circle_attr
}) =>
<div className='row'>
  <div className='col-lg-12 col-xl-6'>
    <form>
      <div className='box'>
        <div className='box-header indigo'>
          <h2 className='padding'>Create Circle</h2>
        </div>
        <div className='box-body'>
          <p className='text-muted'>Enter the information you want to use to create this circle with below.</p>
          <div className='form-group'>
            <label>Circle Name</label>
            <input
              type = 'text'
              className = 'form-control'
              value = {new_circle.get('circle_name')}
              onChange={edit_circle_attr('circle_name')}
              placeholder = 'My New Circle'
            />
          </div>
          <div className='form-group'>
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
          <div className='form-group'>
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
          <div className='form-group'>
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
          <div className='form-group'>
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
          <div className='form-group'>
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
  </div>
  <div className='col-lg-12 col-xl-6'>
    <div className='box'>
      <div className='box-header indigo'>
        <h2 className='panel-title padding'>
          <i className='fa fa-info-circle padding-right-one'></i>
          Creating A circle
        </h2>
      </div>
      <div className='box-body'>
        <p>Use this form to create a new savings circle, after you've created the circle, you will be added to it and, as the chircle chair will be able to add more users to it.</p>
        <div className='padding-half indigo-50'>
          <h5 className='text-info font-bold'>Circle Name</h5>
          <p>Just a simple identifier for the circle.</p>
        </div>
        <div className='padding-half'>
          <h5 className='text-info font-bold'>Participant Count</h5>
          <p>The number of people, including yourself, that you want to be in this circle. Circles must have at least four, but no more than twelve participants.</p>
        </div>
        <div className='padding-half'>
          <h5 className='text-info font-bold'>Desired Withdrawal Value</h5>
          <p>The dollar amount you wish to the circle to pay out at the ned of each savings cycle.</p>
        </div>
        <div className='padding-half'>
          <h5 className='text-info font-bold'>Savings Cycle Length</h5>
          <p>The period of time between each payout event.</p>
        </div>
        <div className='padding-half'>
          <h5 className='text-info font-bold'>Start Date</h5>
          <p>The date at which the circle will start.</p>
        </div>
        <div className='padding-half'>
          <h5 className='text-info font-bold'>Contribution amount</h5>
          <p>The dollar amount that each circle member is required ot pay into the circle each savings cycle. This is calcualted from the withdrawal value and number of participants, it includes the ROSCr fees.</p>
        </div>
      </div>
    </div>
  </div>
</div>;

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles}) => ({new_circle: circles.get('new_circle')});

const map_dispatch_to_props = dispatch => {
  const edit_circle = bindActionCreators(circle_actions.edit_circle, dispatch);

  return {
    edit_circle,
    edit_circle_attr: attr => e => {
      const circle_data = {};
      circle_data[attr] = e.target.value;
      edit_circle({
        circle_id: 'new_circle',
        circle_data
      });
    }
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
