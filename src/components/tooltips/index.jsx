import React from 'react';
import {connect} from 'react-redux';

import './tooltip_styles.scss';

const get_tooltip_style = tooltip => ({
  top: `${tooltip.get('y_coordinate') + 8}px`,
  left: `${tooltip.get('x_coordinate') - 10}px`
});

const unconnected_tooltips_component = ({
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

const tooltip_component = connect()(unconnected_tooltips_component);

export default tooltip_component;
