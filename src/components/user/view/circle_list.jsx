import React from 'react';
import {Link} from 'react-router';

const circle_list_component = ({
  panel_title,
  circles
}) =>
<div className='box'>
  <div className='box-header info'>
    <h2 className='padding-half'>
      <i className='fa fa-circle-o padding-right-one'></i>
      {panel_title}
    </h2>
  </div>
  <div className='box-body'>
    <table className="table">
      <thead>
        <tr>
          <th>Circle Name</th>
        </tr>
      </thead>
      <tbody>
        {circles.map(circle =>
          circle.get('needs_to_be_fetched') ?
          <tr
            key = {circle.get('id')}
          >
            <td>
              <span className='margin-right-one'>
                One moment, fetching circle information...
              </span>
              <i className='fa fa-spinner fa-spin'></i>
            </td>
          </tr> :
          <tr
            key={circle.get('id')}
          >
            <td>
              <Link
                to={`/circle/${circle.get('id')}`}
              >
                {circle.get('circle_name', 'Circle name not set.')}
              </Link>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>;

export default circle_list_component;
