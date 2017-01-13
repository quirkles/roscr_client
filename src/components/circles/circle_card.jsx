import React from 'react';
import classnames from 'classnames';
import {format} from 'date-fp';

import {get_random_element_from_array} from '../../utils/array';
import {capitalize} from '../../utils/string';

const body_colors = ['dark', 'brown', 'deep-purple', 'white', 'blue-grey', 'primary', 'warning', 'danger'];

const circle_component = ({circle}) =>
  <div
    className='col-sm-4'
  >
    <div className='box'>
      <div className={classnames('box-body', get_random_element_from_array(body_colors))}>
        <div className='padding-half'>
          <h2 className='bold'>{capitalize(circle.get('circle_name'))}</h2>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-6 text-lg padding-half">
              <i className="fa fa-dollar padding-half"></i>
              {circle.get('withdrawal_amount')}: payout
            </div>
            <div className="col-sm-6 text-lg padding-half">
              <i className="fa fa-user padding-half"></i>
              {circle.get('members').size}/{circle.get('participant_count')}: members
            </div>
            <div className="col-sm-6 text-lg padding-half">
              <i className="fa fa-calendar padding-right-half"></i>
              starts: {format('MMM DD', new Date(circle.get('created')))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default circle_component;
