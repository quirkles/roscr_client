import React from 'react';
import {Map} from 'immutable';
import {pick} from 'ramda';

import Header from './header';
import Body from './body';

const get_metadata_from_modal_props = modal_props => {
  switch (modal_props.get('content')) {
    case 'add_user_template':
      return modal_props.get('invite_user');
    case 'invite_user_to_circle_template':
      return modal_props.get('invite_user_to_circle_data');
    default:
      return Map({});
  }
};

const get_actions_from_modal_props = (modal_props, actions) => {
  switch (modal_props.get('content')) {
    case 'add_user_template':
      return pick(['update_add_user_email_action', 'submit_add_user_action', 'do_request_add_user_action'], actions);
    case 'invite_user_to_circle_template':
      return pick(['invite_user_to_circle'], actions);
    default:
      return {};
  }
};

export default ({
  modal_props,
  content,
  actions
}) =>
    <div className='modal-content'>
        <Header
          do_close_modal={actions.do_close_modal}
        />
        <Body
          content={content}
          metadata={get_metadata_from_modal_props(modal_props).toJS()}
          actions={get_actions_from_modal_props(modal_props, actions)}
        />
    </div>;
