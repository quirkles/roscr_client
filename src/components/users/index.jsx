import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';

import {update_user_pagination_filter} from '../../actions/user_pagination_actions';
import {find_many_users_with_params} from '../../actions/user_actions';

import UserItem from './user_item';
import UsersHeader from './users_header';
import UsersFilter from './users_filter';
import FetchingUsers from './fetching_users';

import './users_styles.scss';

export const unconnected_users_component = ({
  users,
  user_pagination,
  update_user_pagination_filter_action,
  fetch_users
}) => {
  if (user_pagination.get('fetch_state') === 'unfetched' || user_pagination.get('fetch_state') === 'never_fetched') {
    fetch_users(user_pagination.get('filter').toJS());
  }
  return (
    <div className="users-component">
      <UsersHeader/>
      <div className="padding">
        <div className="row">
          <UsersFilter
            user_pagination_filter={user_pagination.get('filter')}
            update_user_pagination_query={e => update_user_pagination_filter_action({query: e.target.value})}
            update_user_pagination_min_trust={e => update_user_pagination_filter_action({min_trust_score: e.target.value})}
            update_user_pagination_sort_by={sort_by => () => update_user_pagination_filter_action({sort_by})}
          />
        </div>
        <div className='row'>
          {user_pagination.get('fetch_state') === 'never_fetched' ?
            <FetchingUsers/> :
            users.map(user=>
            <UserItem
              key={user.get('id')}
              user={user}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const map_state_to_props = ({users, user_pagination}) => ({
  users: user_pagination
    .get('user_ids', List([]))
    .map(user_id => users
      .get(user_id, Map({
        needs_to_be_fetched: true,
        id: user_id
      })).set('id', user_id)
    ),
  user_pagination
});

const map_dispatch_to_props = dispatch => ({
  update_user_pagination_filter_action: bindActionCreators(update_user_pagination_filter, dispatch),
  fetch_users: bindActionCreators(find_many_users_with_params, dispatch)
});

const connected_users_component = connect(map_state_to_props, map_dispatch_to_props)(unconnected_users_component);

export default connected_users_component;
