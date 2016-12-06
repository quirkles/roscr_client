import React from 'react';

const unconnected_not_found_component = () =>
  <div className='row-col amber h-v'>
      <div className='row-cell v-m'>
          <div className='text-center col-sm-6 offset-sm-3 p-y-lg'>
              <h1>
                <i className='fa fa-4x fa-spin fa-frown-o text-danger'></i>
              </h1>
              <h1 className='display-3 m-y-lg'>Sorry! the page you are looking for doesn't exist.</h1>
              <p className='m-y text-muted h4'>
                  -- 404 --
              </p>
          </div>
      </div>
  </div>;

export default unconnected_not_found_component;
