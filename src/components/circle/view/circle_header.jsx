import React from 'react';
import D from 'date-fp';
import {Link} from 'react-router';

import {capitalize} from '../../../utils/string';

const circle_header_component = ({
  circle_to_display,
  circle_creator
}) =>
<div className='item bg-tile-swirl circle-header'>
  <div className="p-a-md">
    <div className="row m-t">
      <div className="col-sm-7">
        <div className="circle-participant-count yellow">
          {circle_to_display.get('participant_count')}
        </div>
        <div className="clear m-b">
          <h4 className="m-a-0 m-b-sm text-capitalize">{circle_to_display.get('circle_name')}</h4>
          <p className="text-muted">
            <span className="m-r">Created by:</span>
            <small>
              <Link
                to={`/users/${circle_creator.get('id')}`}
              >
                {`${circle_creator.get('firstname')} ${circle_creator.get('lastname')}`}
              </Link>
            </small>
          </p>
          <a href="#" className="btn btn-sm warn rounded info active m-b" data-ui-toggle-className="success">
            <span className="none">Request to join this circle</span>
          </a>
        </div>
      </div>
      <div className="col-sm-5 serif bold text-md">
        <p>Circle created: {D.format('MMMM D YYYY', new Date(circle_to_display.get('created')))}</p>
        <p>Circle starts: {D.format('MMMM D YYYY', new Date(circle_to_display.get('start_date')))}</p>
        <p>Pays out: {capitalize(circle_to_display.get('cycle_period'))}</p>
      </div>
    </div>
  </div>
</div>;

export default circle_header_component;
