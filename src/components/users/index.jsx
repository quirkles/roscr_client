import React from 'react';
import {connect} from 'react-dedux';

export const unconnected_users_component = () =>
<div>Member list</div>;

const connected_users_component = connect()(unconnected_users_component);

export default connected_users_component;
