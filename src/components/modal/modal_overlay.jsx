import React from 'react';
import classnames from 'classnames';

export default ({
  modal_props,
  do_close_modal
}) =>
  <div
    onClick = {do_close_modal}
    className = {classnames('modal-overlay', {
      'overlay-visible': modal_props.get('is_shown')
    })}
  >
  </div>;
