import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import {connect} from 'react-redux';

export const unconnected_shell_component = ({
  children,
  active_route
}) =>
<div>
  <Sidebar active_route = {active_route} />
  <div id="content" className='app-content'>
    <Header />
    <div className="app-body">
      <div className='padding'>
        {React.cloneElement(children)}
      </div>
    </div>
  </div>
</div>;

const map_state_to_props = state => ({
  active_route: state.routing.locationBeforeTransitions.pathname
});

const map_dispatch_to_props = dispatch => ({dispatch});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_shell_component);
