import React from 'react';

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
    <div className="row">
      <div className="col-sm-6">
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
      <div className='col-sm-3'>
        <select
          name="member-count"
          className="circle-filter-field"
          defaultValue={circle_pagination_filter.get('participant_count', '')}
          onChange={(update_circle_pagination_participant_count)}
        >
          <option value=''>Member Count</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  </form>
</div>;

export default circles_filter_component;
