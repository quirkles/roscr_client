import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map} from 'immutable';

import Sidebar from './sidebar';
import Header from './header';
import Modal from '../modal';
import ModalOverlay from '../modal/modal_overlay';
import Tooltips from '../tooltips';

import {
  open_header_dropdown as open_header_dropdown_action,
  close_header_dropdown as close_header_dropdown_action,
  toggle_notification_dropdown
} from '../../actions/ui_state_actions';


import {attempt_log_out} from '../../actions/user_actions';
import {
  close_modal,
  show_add_user_modal
} from '../../actions/modal_actions';

import './shell_styles.scss';

export const unconnected_shell_component = ({
  children,
  active_route,
  tooltips,
  session_user,
  header_dropdown_open,
  notification_dropdown_open,
  toggle_notification_dropdown_action,
  open_header_dropdown,
  close_header_dropdown,
  modal_props,
  do_close_modal,
  do_show_add_user_modal,
  log_out_user
}) =>
<div>
  <Sidebar active_route = {active_route} />
  <div
    id='content'
    className='app-content'
  >
    <Header
      session_user={session_user}
      header_dropdown_open={header_dropdown_open}
      notification_dropdown_open={notification_dropdown_open}
      open_header_dropdown={open_header_dropdown}
      close_header_dropdown={close_header_dropdown}
      log_out_user={log_out_user}
      do_show_add_user_modal={do_show_add_user_modal}
      toggle_notification_dropdown_action = {toggle_notification_dropdown_action}
    />
    <div
      className='app-body'
    >
      <div>
        {React.cloneElement(children)}
      </div>
    </div>
  </div>
  <Tooltips tooltips={tooltips}/>
  <Modal/>
  <ModalOverlay
    modal_props = {modal_props}
    do_close_modal = {do_close_modal}
  />
</div>;

const map_state_to_props = ({routing, ui_state, users, session_user_id, modal}) => ({
  active_route: routing.locationBeforeTransitions && routing.locationBeforeTransitions.pathname,
  session_user: users.get(session_user_id, Map({})).set('id', session_user_id),
  notification_dropdown_open: ui_state.get('notification_dropdown_open', false),
  header_dropdown_open: ui_state.get('header_dropdown_open'),
  modal_props: modal,
  tooltips: ui_state.get('tooltips', Map({}))
    .map((tooltip, tooltip_id) => tooltip.set('id', tooltip_id))
    .toList()
});

const map_dispatch_to_props = dispatch => {
  return {
    do_show_add_user_modal: bindActionCreators(show_add_user_modal, dispatch),
    open_header_dropdown: bindActionCreators(open_header_dropdown_action, dispatch),
    close_header_dropdown: bindActionCreators(close_header_dropdown_action, dispatch),
    log_out_user: bindActionCreators(attempt_log_out, dispatch),
    do_close_modal: bindActionCreators(close_modal, dispatch),
    toggle_notification_dropdown_action: bindActionCreators(toggle_notification_dropdown, dispatch)
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_shell_component);
