import React from 'react';
import classnames from 'classnames';
import {format} from 'date-fp';
import {Link} from 'react-router';

import {get_trust_score_font_class} from '../../utils/user_immutable';

import {capitalize} from '../../utils/string';
import FetchingCircle from './fetching_circle';

const header_colors = ['success', 'danger', 'info', 'primary', 'warning'];

const get_circle_color = circle => header_colors[circle.get('circle_name').length * circle.get('participant_count') % header_colors.length]

const circle_component = ({circle}) =>
  circle.get('needs_to_be_fetched') ?
    <FetchingCircle circle={circle}/> :
    <div
      className='col-xl-4 col-md-6 col-sm-12 circle-card'
    >
      <div className='box'>
        <div className={classnames('box-header', get_circle_color(circle))}>
          <div className='padding-half'>
              <h4 className='bold'>
                  <Link
                      to={`circles/${circle.get('id')}`}
                  >
                      {capitalize(circle.get('circle_name'))}
                  </Link>
              </h4>
          </div>
      </div>
      <div className='box-body'>
          <div className="text-md">
            <div className="row padding-bottom-one">
              <div className="col col-sm-12 serif">
                {circle.getIn(['created_by', 'needs_to_be_fetched']) ?
                  <div className="italic text-muted">
                      <i className={classnames('fa fa-spin fa-spinner margin-right-half', `text-${get_circle_color(circle)}`)}/>
                      Fetching circle creator information...
                  </div> :
                  <div>
                    <span className="margin-right-quarter">Circle Creator:</span>
                    <Link to={`/users/${circle.getIn(['created_by', 'id'])}`}>{`${circle.getIn(['created_by', 'firstname'])} ${circle.getIn(['created_by', 'lastname'])}`}</Link>
                    <span className={classnames("margin-left-half bold inline-block padding-half", get_trust_score_font_class(circle.getIn(['created_by', 'trust_score'])))}>
                      {circle.getIn(['created_by', 'trust_score'])}
                    </span>
                  </div>
                }
              </div>
            </div>
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
                {format('MMM DD', new Date(circle.get('start_date')))}
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
