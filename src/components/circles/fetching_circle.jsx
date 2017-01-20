import React from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';

import {get_random_element_from_array} from '../../utils/array';

const header_colors = ['teal', 'light-blue', 'blue', 'primary', 'warning'];

const fetching_circle = ({circle}) =>
<div className='col-xl-4 col-md-6 col-sm-12 circle-card'>
  <div className='box'>
    <div className={classnames('box-header', get_random_element_from_array(header_colors))}>
      <div className='padding-half'>
        <h4 className='bold'>
          <Link to={`circle/${circle.get('id')}`}>Fetching circle...</Link>
          <i className='fa fa-refresh fa-spin pull-right'></i>
        </h4>
      </div>
    </div>
    <div className='box-body grey-300'>
      <p>
        Please wait a moment while we fetch this circle information
      </p>
    </div>
  </div>
</div>;

export default fetching_circle;
