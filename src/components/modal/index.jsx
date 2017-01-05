import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import classnames from 'classnames';

import Content from './content';

import {
  close_modal,
  show_add_user_modal,
  update_add_user_email,
  submit_add_user
} from '../../actions/modal_actions'

import './modal_styles.scss';

const unconnected_modal_component = ({
  modal,
  do_close_modal,
  update_add_user_email_action,
  submit_add_user_action
}) => {
  return (
      <div
        className = {classnames('modal', {
          'modal-show': modal.get('is_shown')
        })}
      >
        <Content
          modal_props = {modal}
          do_close_modal = {do_close_modal}
          update_add_user_email_action = {update_add_user_email_action}
          submit_add_user_action = {submit_add_user_action}
        />
    </div>
  );
};

const map_state_to_props = ({modal}) => ({modal});

const map_dispatch_to_props = dispatch => {
  const update_add_user_email_action = e => bindActionCreators(update_add_user_email, dispatch)(e.target.value);
  return {
    do_close_modal: bindActionCreators(close_modal, dispatch),
    do_show_add_user_modal: bindActionCreators(show_add_user_modal, dispatch),
    submit_add_user_action: bindActionCreators(submit_add_user, dispatch),
    update_add_user_email_action
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_modal_component);
