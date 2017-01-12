import React from 'react';
import classnames from 'classnames';

import {get_random_element_from_array} from '../../utils/array';
import {capitalize} from '../../utils/string';

const body_colors = ['dark', 'brown', 'deep-purple', 'white', 'blue-grey', 'primary', 'warning', 'danger'];

const circle_component = ({circle}) =>
  <div
    className='col-sm-4'
  >
    <div className='box'>
      <div className={classnames('box-header', get_random_element_from_array(body_colors))}>
        <div className='margin-top-half margin-bottom-half'>
          <h2 className='bold'>{capitalize(circle.get('circle_name'))}</h2>
        </div>
        <p className='m-a-0'>Circle information</p>
      </div>
    </div>
  </div>;

export default circle_component;
