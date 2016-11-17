import React from 'react';
import {connect} from 'react-redux';

const unconnected_signup_component = () => <div>Signup</div>;

export default connect()(unconnected_signup_component);
