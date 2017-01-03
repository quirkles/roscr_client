import React from 'react';

import Content from './content';

import './modal_styles.scss';

const modal = ({modal_props}) => {
  return (
      <div className = {`modal ${modal_props.get('is_shown') ? 'modal-show' : ''}`}>
        <Content
            modal_props={modal_props}
        />
    </div>
  );
};

export default modal;
