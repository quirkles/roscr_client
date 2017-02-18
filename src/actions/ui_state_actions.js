import {
  SHOW_TOOLTIP_AT_ELEMENT,
  DESTROY_TOOLTIP,
  DESTROY_ALL_TOOLTIPS,
  OPEN_HEADER_DROPDOWN,
  CLOSE_HEADER_DROPDOWN,
  OPEN_NOTIFICATION_DROPDOWN,
  CLOSE_NOTIFICATION_DROPDOWN,
  CLOSE_ALL_NAV_DROPDOWNS,
  OPEN_ADD_USER_TO_CIRCLE_DROPDOWN
} from '../constants/ui_state_constants';

import cuid from 'cuid';

import {Map} from 'immutable';
import {merge, omit} from 'ramda';

export const show_tooltip = (tooltip, anchor_element) => {
  const {id} = tooltip;
  const el_viewport_offset = anchor_element.getBoundingClientRect();

  return {
    type: SHOW_TOOLTIP_AT_ELEMENT,
    tooltip_id: id || cuid(),
    tooltip_data: Map(merge(omit('id', tooltip), {
      x_coordinate: el_viewport_offset.left - el_viewport_offset.width,
      y_coordinate: el_viewport_offset.top + el_viewport_offset.height
    }))
  };
};

export const destroy_tooltip = tooltip_id => ({
  type: DESTROY_TOOLTIP,
  tooltip_id
});

export const destroy_all_tooltips = () => ({ type: DESTROY_ALL_TOOLTIPS });

export const open_header_dropdown = () => ({ type: OPEN_HEADER_DROPDOWN });

export const close_header_dropdown = () => ({ type: CLOSE_HEADER_DROPDOWN });

export const open_notification_dropdown = () => ({ type: OPEN_NOTIFICATION_DROPDOWN });

export const close_notification_dropdown = () => ({ type: CLOSE_NOTIFICATION_DROPDOWN });

export const close_all_nav_dropdowns = () => ({ type: CLOSE_ALL_NAV_DROPDOWNS});

export const open_add_user_to_circle_dropdown = user_id => ({
  type: OPEN_ADD_USER_TO_CIRCLE_DROPDOWN,
  user_id
});
