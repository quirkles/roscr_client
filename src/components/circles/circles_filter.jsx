import React from 'react';
import {Map} from 'immutable';
import InputRange from 'react-input-range';
import { Calendar } from 'react-date-range';

import 'react-input-range/lib/css/index.css';

const circles_filter_component = ({
  circle_pagination_filter,
  update_circle_pagination_query,
  update_circle_pagination_cycle_period,
  update_circle_pagination_participant_count
}) =>
<div className='col-md-12 padding-two circles_filter_component'>
  <h3 className='serif b-b margin-bottom-one padding-bottom-one'>
    Dive into ROSCr by browsing the available circles on this screen.
    <br></br>
    <br></br>
    Use the filter to tailor your results.
  </h3>
  <form className='b-b padding-bottom-one margin-bottom-one'>
    <div className="row padding-bottom-one">
      <div className="col-sm-9">
        <div className='searchbox input-group'>
          <input
            type='text'
            value={circle_pagination_filter.get('query', '')}
            onChange = {update_circle_pagination_query}
            className="circle-filter-field"
            placeholder='Circle Search Query'
          >
          </input>
          <div className='underline-container'></div>
        </div>
      </div>
      <div className='col-sm-3'>
        <select
          name="cycle-length"
          className="circle-filter-field"
          defaultValue={circle_pagination_filter.get('cycle_period', '')}
          onChange = {update_circle_pagination_cycle_period}
        >
          <option value=''>Cycle Length</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekely</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-8'>
        <div className="row">
          <div className="col-sm-12 member-slider">
            <h4 className='serif b-b padding-half margin-half'>
              Member Range Selector
            </h4>
            <div className='padding-top-two'>
              <InputRange
                 minValue={8}
                 maxValue={12}
                 value={circle_pagination_filter.get('participant_count', Map({min: 8, max: 12})).toJS()}
                 onChange={update_circle_pagination_participant_count}
              />
            </div>
          </div>
          <div className="col-sm-12 amount-slider">
            <h4 className='serif b-b padding-half margin-half'>
              Payout Range Selector
            </h4>
            <div className='padding-top-two'>
              <InputRange
                 minValue={50}
                 maxValue={1000}
                 value={{min: 50, max: 1000}}
                 onChange={value => console.log(value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-4'>
        <Calendar
          onInit={() => {}}
          onChange={() => {}}
        />
      </div>
    </div>
  </form>
</div>;

export default circles_filter_component;
