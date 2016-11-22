import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as circle_actions from '../../../actions/circle_actions';


export const unconnected_create_circle_component = ({
  new_circle,
  edit_circle_attr
}) =>
<div className='row'>
  <div className='col-sm-12'>
    <form data-ui-jp='parsley'>
      <div className='box'>
        <div className='box-header'>
          <h2>Create Circle</h2>
        </div>
        <div className='box-body'>
          <p className='text-muted'>Enter Circle Data</p>
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
            <label className='control-label'>Desired withdrawal value</label>
            <input
              type = 'number'
              className = 'form-control'
              placeholder = '$100'
              value = {new_circle.get('withdrawal_amount')}
              onChange = {edit_circle_attr('withdrawal_amount')}
              step = '10'
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>Savings cycle length</label>
            <select
              className='form-control'
            >
              <option disabled selected>-- Select Cycle Length --</option>
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
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>Contribution amount (per user per cycle)</label>
            <input
              type='text'
              readOnly
              className='form-control'
            />
          </div>
          <div className='button-list'>
            <button className='btn btn-primary w-sm'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({circles}) => ({new_circle: circles.get('new_circle')});

const map_dispatch_to_props = dispatch => ({
  edit_circle_attr: attr => e => {
    const circle_data = {};
    circle_data[attr] = e.target.value;
    bindActionCreators(circle_actions.edit_circle, dispatch)({
      circle_id: 'new_circle',
      circle_data
    });
  }
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
