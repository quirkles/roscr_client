import React from 'react';

const fetching_users_component = () =>
<div className='row-col white loader-component'>
      <div className='row-cell'>
          <div className='text-center col-sm-6 offset-sm-3 p-y-sm'>
              <div className='loader-animation'></div>
              <h1 className='display-4 m-y-sm margin-bottom-one'>Fetching Users. <br></br>A moment, please.</h1>
          </div>
      </div>
  </div>;

export default fetching_users_component;
