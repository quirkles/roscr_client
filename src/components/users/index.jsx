import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';

import {update_user_pagination_filter} from '../../actions/user_pagination_actions';
import {find_many_users_with_params} from '../../actions/user_actions';

export const unconnected_users_component = ({
  users,
  user_pagination,
  fetch_users
}) => {
  if (user_pagination.get('fetch_state') === 'unfetched') {
    fetch_users(user_pagination.get('filter').toJS());
  }
  return (
    <ul>
      {users.map(user=>
        <li key={user.get('id')}>{user.get('firstname')}</li>
      )}
    </ul>
  );
};

const map_state_to_props = ({users, user_pagination}) => ({
  users: user_pagination
    .get('user_ids', List([]))
    .map(user_id => users
      .get(user_id, Map({
        needs_to_be_fetched: true,
        id: user_id
      }))
    ),
  user_pagination
});

const map_dispatch_to_props = dispatch => ({
  update_user_pagination_filter_action: bindActionCreators(update_user_pagination_filter, dispatch),
  fetch_users: bindActionCreators(find_many_users_with_params, dispatch)
});

const connected_users_component = connect(map_state_to_props, map_dispatch_to_props)(unconnected_users_component);

export default connected_users_component;
