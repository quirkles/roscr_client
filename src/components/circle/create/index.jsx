import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './create_circle_styles.scss';

import CreateCircleForm from './create_circle_form';
import CreateCircleInfoPanel from './create_circle_info_panel';
import CreateHircleHeader from './create_circle_header';

import {edit_circle as edit_circle_action, attempt_create_circle} from '../../../actions/circle_actions';
import {set_hover_hint as set_hover_hint_action} from '../../../actions/new_circle_actions.js';

export const unconnected_create_circle_component = ({
  new_circle,
  edit_circle,
  edit_circle_attr,
  set_hover_hint_to_section,
  mark_new_circle_as_submitted,
  do_attempt_create_circle
}) =>
<div className='create-circle-component'>
  <CreateHircleHeader/>
  <div className="padding">
    <div className='row margin-top-two'>
      <div className='col-lg-12 col-xl-6'>
        <CreateCircleForm
          new_circle = {new_circle}
          edit_circle = {edit_circle}
          edit_circle_attr = {edit_circle_attr}
          set_hover_hint_to_section = {set_hover_hint_to_section}
          mark_new_circle_as_submitted = {mark_new_circle_as_submitted}
          do_attempt_create_circle = {do_attempt_create_circle}
        />
      </div>
      <div className='col-lg-12 col-xl-6'>
        <CreateCircleInfoPanel
          hover_hint ={new_circle.get('hover_hint')}
        />
      </div>
    </div>
  </div>
</div>;

// state -> pick circles -> get 'new_circle'
const map_state_to_props = ({new_circle}) => ({new_circle});

const map_dispatch_to_props = dispatch => {
  const edit_circle = bindActionCreators(edit_circle_action, dispatch);
  const set_hover_hint = bindActionCreators(set_hover_hint_action, dispatch);
  const do_attempt_create_circle = bindActionCreators(attempt_create_circle, dispatch);

  return {
    edit_circle,
    do_attempt_create_circle,
    mark_new_circle_as_submitted: () => edit_circle({
      circle_id: 'new_circle',
      circle_data: {
        has_attempted_form_submit: true
      }
    }),
    set_hover_hint_to_section: attr => () => set_hover_hint(attr),
    edit_circle_attr: attr => e => {
      const circle_data = {};
      circle_data[attr] = e.target.type === 'checkbox' ?
        e.target.checked :
        e.target.value;
      edit_circle({
        circle_id: 'new_circle',
        circle_data
      });
    }
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_create_circle_component);
