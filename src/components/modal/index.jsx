import React from 'react';
import classnames from 'classnames';

import Content from './content';

import './modal_styles.scss';

const modal = ({
  modal_props,
  do_close_modal,
  update_add_user_email_action
}) => {
  return (
      <div
        className = {classnames('modal', {
          'modal-show': modal_props.get('is_shown')
        })}
      >
        <Content
          modal_props = {modal_props}
          do_close_modal = {do_close_modal}
          update_add_user_email_action = {update_add_user_email_action}
        />
    </div>
  );
};

export default modal;
