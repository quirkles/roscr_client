import React from 'react';
import classnames from 'classnames';
import {format} from 'date-fp';
import {Link} from 'react-router';

import {get_random_element_from_array} from '../../utils/array';
import {capitalize} from '../../utils/string';

const header_colors = ['teal', 'light-blue', 'blue', 'primary', 'warning'];

const circle_component = ({circle}) =>
  <div
    className='col-xl-4 col-md-6 col-sm-12 circle-card'
  >
    <div className='box'>
      <div className={classnames('box-header', header_colors[circle.get('circle_name').length * circle.get('participant_count') % header_colors.length])}>
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
    <div className='box-body grey-300'>
        <div className="text-md">
          <div className="row padding-bottom-one">
            <div className="col-sm-6">
              <i className="fa fa-dollar padding-right-quarter"></i>
              {circle.get('withdrawal_amount')}
              <small className='text-sm text-muted'>: Payout/cycle</small>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-user padding-right-quarter"></i>
              {circle.get('members').size}/{circle.get('participant_count')}
              <small className='text-sm text-muted'>: Members</small>
              </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-calendar padding-right-quarter"></i>
              {format('MMM DD', new Date(circle.get('created')))}
              <small className='text-sm text-muted'>: Starts</small>
            </div>
            <div className="col-sm-6">
              <i className="fa fa-refresh padding-right-quarter"></i>
              {capitalize(circle.get('cycle_period'))}
              <small className='text-sm text-muted'>: Payouts</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default circle_component;
