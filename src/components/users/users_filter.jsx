import React from 'react';

const users_filter_component = ({
  user_pagination_filter,
  update_user_pagination_query,
  update_user_pagination_min_trust
}) =>
  <div className='col-md-12 users_filter_component'>
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
    </form>
  </div>;

export default users_filter_component;
