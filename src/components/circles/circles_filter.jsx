import React from 'react';

const circles_filter_component = () =>
<div className='col-sm-12 padding-two circles_filter_component'>
  <form>
    <div
      className='searchbox input-group'
    >
      <span className="input-group-addon">
        <i className="fa fa-2x fa-search text-dark"></i>
      </span>
      <input
        type='text'
        className="form-control"
      >
      </input>
    </div>
  </form>
</div>

export default circles_filter_component;