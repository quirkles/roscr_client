import React from 'react';

import './tooltip_styles.scss';

const get_tooltip_style = tooltip => ({
  top: `${tooltip.get('y_coordinate') + 8}px`,
  left: `${tooltip.get('x_coordinate') - 10}px`
});

const tooltip_component = ({
  tooltips
}) =>

<div className='tooltip-list'>
  {tooltips.map(tooltip =>
    <div
      className='tooltip-item'
      style = {get_tooltip_style(tooltip)}
      key={tooltip.get('id')}
    >
      <span className="arrow top b-danger"></span>
      <div className='tooltip-header danger'>
        {tooltip.get('title_text')}
      </div>
      <div className='tooltip-body grey-100 b-b b-r b-l b-danger'>
        {tooltip.get('body_text')}
      </div>
    </div>
  )}
</div>;

export default tooltip_component;
