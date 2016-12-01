import React from 'react';
import {bindActionCreators} from 'redux';

import Sidebar from './sidebar';
import Header from './header';
import {connect} from 'react-redux';

import Tooltips from '../tooltips';
import {open_header_dropdown as open_header_dropdown_action} from '../../actions/ui_state_actions';

export const unconnected_shell_component = ({
  children,
  active_route,
  tooltips,
  session_user,
  header_dropdown_open,
  open_header_dropdown
}) =>
<div>
  <Tooltips tooltips={tooltips}/>
  <Sidebar active_route = {active_route} />
  <div
    id="content"
    className='app-content'
  >
    <Header
      session_user={session_user}
      header_dropdown_open={header_dropdown_open}
      open_header_dropdown={open_header_dropdown}
    />
    <div
      className="app-body"
    >
      <div>
        {React.cloneElement(children)}
      </div>
    </div>
  </div>
</div>;

const map_state_to_props = ({routing, ui_state, users, session_user_id}) => ({
  active_route: routing.locationBeforeTransitions && routing.locationBeforeTransitions.pathname,
  session_user: users.get(session_user_id),
  header_dropdown_open: ui_state.get('header_dropdown_open'),
  tooltips: ui_state.get('tooltips')
    .map((tooltip, tooltip_id) => tooltip.set('id', tooltip_id))
    .toList()
});

const map_dispatch_to_props = dispatch => ({
  open_header_dropdown: bindActionCreators(open_header_dropdown_action, dispatch)
});

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_shell_component);
