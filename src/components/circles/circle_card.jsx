import React from 'react';
import classnames from 'classnames';
import {format} from 'date-fp';
import {Link} from 'react-router';

import {get_random_element_from_array} from '../../utils/array';
import {capitalize} from '../../utils/string';

const body_colors = ['dark', 'brown', 'deep-purple', 'blue-grey', 'primary', 'warning', 'danger'];

const circle_component = ({circle}) =>
  <div
    className='col-sm-4 circle-card'
  >
    <div className='box'>
      <div className={classnames('box-header', get_random_element_from_array(body_colors))}>
        <div className='padding-half'>
            <h4 className='bold'>
                <Link
                    to={`circle/${circle.get('id')}`}
                >
                    {capitalize(circle.get('circle_name'))}
                </Link>
            </h4>
        </div>
    </div>
    <div className={classnames('box-body')}>
        <div>
          <div className="row">
            <div className="col-sm-6 padding-quarter">
              <i className="fa fa-dollar padding-right-quarter"></i>
              {circle.get('withdrawal_amount')} payout
            </div>
            <div className="col-sm-6 padding-quarter">
              <i className="fa fa-user padding-right-quarter"></i>
              {circle.get('members').size}/{circle.get('participant_count')} members
            </div>
            <div className="col-sm-6 padding-quarter">
              <i className="fa fa-calendar padding-right-quarter"></i>
              starts {format('MMM DD', new Date(circle.get('created')))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default circle_component;
