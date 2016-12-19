import React from 'react';

import './loader_styles.scss';

const loader_component = ({title}) =>
<div className='row-col white h-v loader-component'>
      <div className='row-cell v-m'>
          <div className='text-center col-sm-6 offset-sm-3 p-y-lg'>
              <div className='loader-animation'></div>
              <h1 className='display-3 m-y-lg'>{title}</h1>
          </div>
      </div>
  </div>;

export default loader_component;
