import React from 'react';
import D from 'date-fp';

import {get_activity_description_from_type} from '../../../utils/activity_helpers';

import UserProfileHeader from './user_profile_header';
import UserEditPanel from './user_edit_panel';
import CircleList from './circle_list';

const view_user_component = ({
  user_to_display,
  open_editing_panel_for_user_with_id,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  stop_editing_and_do_update_attr_for_user,
  edit_user_attr_with_id,
  circles_as_member,
  circles_created
}) =>
<div className="view-user-component">
  <UserProfileHeader
    user_to_display={user_to_display}
    open_editing_panel_for_user_with_id={open_editing_panel_for_user_with_id}
  />
  <div className="padding">
    <div className='row margin-top-two'>
      <div className='col-lg-12 col-xl-6'>
        {circles_as_member.size ?
          <CircleList
            panel_title='Circles As Member'
            circles={circles_as_member}
          /> :
          <div className='box'>
            <div className='box-body text-center padding-two'>
              <h4 className='serif'>This user hasn't yet joined any circles.</h4>
              <br/>
              <p>Do you think they might be a good fit for a circle you are in?</p>
              <br />
              <div className='btn btn-outline rounded b-success text-success'>Invite User to Circle</div>
            </div>
          </div>
        }
        {circles_created.size ?
          <CircleList
            panel_title='Circles As Creator'
            circles={circles_created}
          /> :
          <div className='box'>
            <div className='box-body text-center padding-two'>
              <h4 className='serif'>This user hasn't yet created any circles.</h4>
              <br/>
              <p>Do you think they might be a good fit for a circle you are in?</p>
              <br />
              <div className='btn btn-outline rounded b-success text-success'>Invite User to Circle</div>
            </div>
          </div>
        }
      </div>
      <div className='col-lg-12 col-xl-6'>
        <div className='box'>
          <div className='box-header warn'>
            <h2 className='padding-half serif bold'>
              <i className='fa fa-history padding-right-one'/>
              Activity History
            </h2>
          </div>
          <div className='box-body'>
            <div>
              <div className='streamline m-b'>
                {
                  user_to_display.get('activity').map(activity_item =>
                    <div
                      key={activity_item.get('id')}
                      className='sl-item'
                    >
                      <div className='sl-content'>
                        <div className='sl-date text-muted'>{D.format('MMMM D YYYY', new Date(activity_item.get('date')))}</div>
                        <p>{get_activity_description_from_type(activity_item.get('activity_type'))}</p>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UserEditPanel
    user_to_display={user_to_display}
    close_editing_panel_for_user_with_id={close_editing_panel_for_user_with_id}
    start_editing_attr_for_user_with_id={start_editing_attr_for_user_with_id(user_to_display.get('id'))}
    edit_user_attr_with_id={edit_user_attr_with_id(user_to_display.get('id'))}
    stop_editing_and_do_update_attr={stop_editing_and_do_update_attr_for_user(user_to_display.get('id'))}
  />
  <div
    className="user-edit-panel-overlay"
    onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
  ></div>
</div>;

export default view_user_component;
