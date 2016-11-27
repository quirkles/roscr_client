import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import {connect} from 'react-redux';

import Tooltips from '../tooltips';

export const unconnected_shell_component = ({
  children,
  active_route,
  tooltips
}) =>
<div>
  <Tooltips tooltips={tooltips}/>
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
  active_route: state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.pathname,
  tooltips: state.tooltips
    .map((tooltip, tooltip_id) => tooltip.set('id', tooltip_id))
    .toList()
});

const map_dispatch_to_props = dispatch => ({dispatch});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_shell_component);
