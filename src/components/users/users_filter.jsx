import React from 'react';

import classnames from 'classnames';

const users_filter_component = ({
  user_pagination_filter,
  update_user_pagination_query,
  update_user_pagination_min_trust,
  update_user_pagination_sort_by
}) =>
  <div className='col-md-12 padding-two users_filter_component'>
    <h3 className='serif b-b margin-bottom-one padding-bottom-one'>
      Dive into ROSCr by browsing other users on this screen.
      <br></br>
      <br></br>
      Use the filter to tailor your results.
    </h3>
    <form className='b-b padding-bottom-one margin-bottom-one'>
      <div className="row">
        <div className="col-sm-8">
          <div className='searchbox input-group'>
            <input
              type='text'
              className="user-filter-field"
              placeholder='User Search Query'
              value={user_pagination_filter.get('query', '')}
              onChange={update_user_pagination_query}
            >
            </input>
            <div className='underline-container'></div>
          </div>
        </div>
        <div className='col-sm-4'>
          <select
            name="cycle-length"
            className="user-filter-field"
            defaultValue={user_pagination_filter.get('min_trust_score', '')}
            onChange = {update_user_pagination_min_trust}
          >
            <option value=''>Min Trust Score</option>
            <option value="95">95</option>
            <option value="90">90</option>
            <option value="85">85</option>
            <option value="">Any</option>
          </select>
        </div>
      </div>
      <div>
        <h3 className='serif padding'>Sort results by:</h3>
      </div>
      <div className='row'>
        <div className="clearfix m-b nav-active-warn">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className={classnames('nav-link', {active: user_pagination_filter.get('sort_by') === 'email_address'})}
                onClick={update_user_pagination_sort_by('email_address')}
              >
                Email
              </a>
            </li>
            <li className="nav-item">
              <a
                className={classnames('nav-link', {active: user_pagination_filter.get('sort_by') === '-trust_score'})}
                onClick={update_user_pagination_sort_by('-trust_score')}
              >
                Trust Score
              </a>
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>;

export default users_filter_component;
