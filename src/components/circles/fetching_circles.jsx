import React from 'react';

const fetching_circles_component = () =>
<div className='row-col white loader-component'>
      <div className='row-cell'>
          <div className='text-center col-sm-6 offset-sm-3 p-y-sm'>
              <div className='loader-animation'></div>
              <h1 className='display-4 m-y-sm'>Fetching Circles. <br></br>A moment, please.</h1>
          </div>
      </div>
  </div>;

export default fetching_circles_component;
