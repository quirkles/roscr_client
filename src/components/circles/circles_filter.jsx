import React from 'react';

const circles_filter_component = ({circle_pagination_filter, update_circle_pagination_query}) =>
<div className='col-md-12 padding-two circles_filter_component'>
  <h3 className='serif b-b margin-bottom-one padding-bottom-one'>
    Dive into ROSCr by browsing the available circles on this screen.
    <br></br>
    <br></br>
    Use the filter to tailor your results.
  </h3>
  <form className='b-b padding-bottom-one margin-bottom-one'>
    <div className="row">
      <div className="col-sm-8">
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
      <div className='col-sm-2'>
        <select name="cycle-length" id="" className="circle-filter-field">
          <option disabled selected>Cycle Length</option>
          <option value="">Weekly</option>
          <option value="">Bi-Weekely</option>
          <option value="">Monthly</option>
        </select>
      </div>
      <div className='col-sm-2'>
        <select name="member-count" id="" className="circle-filter-field">
          <option disabled selected>Member Count</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
        </select>
      </div>
    </div>
  </form>
</div>;

export default circles_filter_component;
