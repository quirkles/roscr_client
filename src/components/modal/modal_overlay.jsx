import React from 'react';
import classnames from 'classnames';

export default ({modal_props}) =>
  <div
    className = {classnames('modal-overlay', {
      'overlay-visible': modal_props.get('is_shown')
    })}
  >
  </div>;
