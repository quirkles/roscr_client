import React from 'react';
import D from 'date-fp';
import {Map} from 'immutable';
import {mapObjIndexed, values, omit} from 'ramda';
import classnames from 'classnames';

import {is_required} from '../../../utils/validators';

import {noop} from '../../../utils/func';

const do_validations_on_circle = circle => (validators, attr) =>
  validators.map(validator => validator(circle.get(attr, ''))).filter(r => !!r);

const get_circle_validation_errors = circle =>
  mapObjIndexed(
    do_validations_on_circle(circle),
    {
      circle_name: [is_required],
      participant_count: [],
      withdrawal_amount: [],
      cycle_period: [],
      start_date: []
    }
  );

const get_contribution_value = (withdrawal_value, participant_count) => {
  const contribution_value = parseFloat(withdrawal_value, 10) / parseInt(participant_count, 10);
  return Number.isNaN(contribution_value) ?
    'Contribution value is calculated from the withdrawal value and number of particiapnts' :
    `$${contribution_value.toFixed(2)}`;
};

const create_circle_form = ({
  new_circle = Map({}),
  edit_circle = noop,
  edit_circle_attr = noop,
  set_hover_hint_to_section = noop,
  mark_new_circle_as_submitted = noop,
  do_attempt_create_circle = noop
}) => {
  const validation_errors = get_circle_validation_errors(new_circle);

  const handle_submit_click = e => {
    e.preventDefault();
    mark_new_circle_as_submitted();
    if (values(validation_errors).reduce((reduction, value) => reduction + value.length, 0) === 0) {
      do_attempt_create_circle(omit(['hover_hint', 'has_attempted_form_submit'], new_circle.toJS()));
    }
  };
  return (
    <form
      className={classnames({
        'show-form-validation-hints': new_circle.get('has_attempted_form_submit')
      })}
    >
        <div className='box'>
          <div className='box-header pink'>
            <h2 className='padding-half serif bold'>
              <i className='fa fa-plus-circle padding-right-one'></i>
              Create Circle
            </h2>
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
                name='circle_name'
                className={classnames('form-control', {
                  'form-error': validation_errors.circle_name && validation_errors.circle_name.length
                })}
                value = {new_circle.get('circle_name', '')}
                onChange={edit_circle_attr('circle_name')}
                placeholder = 'My New Circle'
              />
              <ul className='form-errors-list'>
                  {validation_errors.circle_name ? validation_errors.circle_name.map((error, i) => <li key={i}>{error}</li>) : null}
              </ul>
            </div>
            <div
              className='form-group'
              onMouseEnter={set_hover_hint_to_section('participant_count')}
              onMouseLeave={set_hover_hint_to_section(null)}
            >
              <label>Particpant Count</label>
              <select
                name='participant_count'
                className='form-control'
                value={new_circle.get('participant_count', 12)}
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
                name='withdrawal_amount'
                type = 'number'
                className = 'form-control'
                placeholder = '$100'
                value = {new_circle.get('withdrawal_amount', 100)}
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
                name='cycle_period'
                className='form-control'
                value = {new_circle.get('cycle_period', 'monthly')}
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
                name='start_date'
                type='date'
                className='form-control'
                value={D.format('YYYY-MM-DD', new_circle.get('start_date', new Date()))}
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
              onMouseEnter={set_hover_hint_to_section('is_public')}
              onMouseLeave={set_hover_hint_to_section(null)}
            >
              <label className='control-label'>Create Circle Public</label>
              <div>
                <label className="md-switch">
                  <input
                    type="checkbox"
                    className='has-value'
                    defaultChecked={new_circle.get('is_public')}
                    onChange = {edit_circle_attr('is_public')}
                  />
                  <i className='primary'></i>
                </label>
              </div>
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
              <button
                className='btn primary w-sm'
                onClick={handle_submit_click}
              >Submit</button>
            </div>
          </div>
        </div>
    </form>
  );
};

export default create_circle_form;
