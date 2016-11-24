import React from 'react';
import {connect} from 'react-redux';
import {Map} from 'immutable';

import UserInformation from './user_information';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display
}) =>
  <div className='row '>
    <div className='col-lg-12 col-xl-6'>
      <UserInformation
        user_to_display = {user_to_display}
      />
    </div>
  </div>;

const map_state_to_props = ({users}, own_props) => {
  const user_to_display = users
    .get(own_props.params.user_id, Map({needs_to_be_fetched: true}))
    .set('id', own_props.params.user_id);
  return {
    user_to_display,
  };
};

const map_dispatch_to_props = dispatch => ({dispatch});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_view_user_component);
