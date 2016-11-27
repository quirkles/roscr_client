import {
  SHOW_TOOLTIP_AT_ELEMENT,
  DESTROY_TOOLTIP,
  DESTROY_ALL_TOOLTIPS
} from '../constants/tooltip_constants';
import cuid from 'cuid';
import {Map} from 'immutable';

export const show_tooltip = (tooltip, anchor_element) => {
  const {id, ...tooltip_data} = tooltip;
  const el_viewport_offset = anchor_element.getBoundingClientRect();

  return {
    type: SHOW_TOOLTIP_AT_ELEMENT,
    tooltip_id: id || cuid(),
    tooltip_data: Map({
      ...tooltip_data,
      x_coordinate: el_viewport_offset.left - el_viewport_offset.width,
      y_coordinate: el_viewport_offset.top + el_viewport_offset.height
    })
  };
};

export const destroy_tooltip = tooltip_id => ({
  type: DESTROY_TOOLTIP,
  tooltip_id
});

export const destroy_all_tooltips = () => ({
  type: DESTROY_ALL_TOOLTIPS
});
