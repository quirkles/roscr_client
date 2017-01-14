import React from 'react';
import classnames from 'classnames';
import {format} from 'date-fp';
import {Link} from 'react-router';

import {get_random_element_from_array} from '../../utils/array';
import {capitalize} from '../../utils/string';

const header_colors = ['danger', 'deep-purple', 'blue-grey', 'primary', 'warning', 'danger'];

const circle_component = ({circle}) =>
  <div
    className='col-sm-6 col-md-4 circle-card'
  >
    <div className='box'>
      <div className={classnames('box-header', get_random_element_from_array(header_colors))}>
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
    <div className='box-body grey-200'>
        <div className="text-lg">
          <div className="row padding-bottom-one">
            <div className="col-sm-6">
              <i className="fa fa-dollar padding-right-quarter"></i>
              {circle.get('withdrawal_amount')}
              <small className='text-md text-muted'>: Payout per cycle</small>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-user padding-right-quarter"></i>
              {circle.get('members').size}/{circle.get('participant_count')}
              <small className='text-md text-muted'>: Members</small>
              </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-calendar padding-right-quarter"></i>
              {format('MMM DD', new Date(circle.get('created')))}
              <small className='text-md text-muted'>: Start Date</small>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-refresh padding-right-quarter"></i>
              {capitalize(circle.get('cycle_period'))}
              <small className='text-md text-muted'>: Payouts</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default circle_component;
