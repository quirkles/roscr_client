import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Map} from 'immutable';

import Content from './content';

import {
  close_modal,
  show_add_user_modal,
  update_add_user_email,
  submit_add_user,
  do_request_submit_add_user
} from '../../actions/modal_actions';

import {
  attempt_invite_user_to_circle
} from '../../actions/user_actions';

import './modal_styles.scss';

const unconnected_modal_component = ({
  is_shown,
  content,
  modal,
  actions
}) => {
  return (
      <div
        className = {classnames('modal', {
          'modal-show': is_shown
        })}
      >
        <Content
          content = {content}
          modal_props = {modal}
          actions = {actions}
        />
    </div>
  );
};

const map_state_to_props = ({modal, users, circles}) => {
  const {
    is_shown,
    content = 'Here is the modal content'
  } = modal.toJS();

  const modal_with_user_and_circle = modal.update('invite_user_to_circle_data', data => Map({
    circle: circles.get(data.get('circle_id'), Map({id: data.get('circle_id'), to_be_fetched: true})).set('id', data.get('circle_id')),
    user: users.get(data.get('user_id'), Map({id: data.get('user_id'), to_be_fetched: true})).set('id', data.get('user_id'))
  }));

  return {
    is_shown,
    content,
    modal: modal_with_user_and_circle
  };
};

const map_dispatch_to_props = dispatch => {
  const update_add_user_email_action = e => bindActionCreators(update_add_user_email, dispatch)(e.target.value);

  const do_attempt_invite_user_to_circle = bindActionCreators(attempt_invite_user_to_circle, dispatch);

  const invite_user_to_circle = user_id => circle_id => () => do_attempt_invite_user_to_circle({user_id, circle_id});
  return {
    actions: {
      do_close_modal: bindActionCreators(close_modal, dispatch),
      do_show_add_user_modal: bindActionCreators(show_add_user_modal, dispatch),
      submit_add_user_action: bindActionCreators(submit_add_user, dispatch),
      do_request_add_user_action: bindActionCreators(do_request_submit_add_user, dispatch),
      update_add_user_email_action,
      invite_user_to_circle
    }
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_modal_component);
