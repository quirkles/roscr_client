import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Map, List} from 'immutable';

import {
  open_editing_panel_for_user,
  close_editing_panel_for_user,
  start_editing_attr_for_user,
  edit_user
} from '../../../actions/user_actions';

import FetchingUser from './fetching_user';

import UserProfileHeader from './user_profile_header';
import UserEditPanel from './user_edit_panel';
import CircleList from './circle_list';
import Loader from '../../loader';

import './view_user_styles.scss';

const unconnected_view_user_component = ({
  user_to_display,
  circles_as_member,
  circles_created,
  open_editing_panel_for_user_with_id,
  close_editing_panel_for_user_with_id,
  start_editing_attr_for_user_with_id,
  edit_user_attr_with_id
}) => user_to_display.get('needs_to_be_fetched') ?
  <Loader
    title='Fetching User Information...'
  /> :
  <div className="view-user-component">
    <UserProfileHeader
      user_to_display={user_to_display}
      open_editing_panel_for_user_with_id={open_editing_panel_for_user_with_id}
    />
    <div className="padding">
      <div className='row margin-top-two'>
        <div className='col-lg-12 col-xl-6'>
          <CircleList
            panel_title='Circles As Member'
            circles={circles_as_member}
          />
          <CircleList
            panel_title='Circles As Creator'
            circles={circles_created}
          />
        </div>
        <div className='col-lg-12 col-xl-6'>
          <div className='box'>
            <div className='box-header warn'>
              <h2 className='padding-half'>
                <i className='fa fa-history padding-right-one'></i>
                Activity History
              </h2>
            </div>
            <div className='box-body'>
              <div>
                <div className='streamline m-b'>
                  <div className='sl-item'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>Just now</div>
                      <p>Finished task <a href="#" className='text-info'>#features 4</a>.</p>
                    </div>
                  </div>
                  <div className='sl-item b-success'>
                    <div className='sl-icon'>
                      <i className='fa fa-twitter'></i>
                    </div>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>11:30</div>
                      <p><a href="#">@Jessi</a> retwit your post</p>
                    </div>
                  </div>
                  <div className='sl-item b-primary'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>10:30</div>
                      <p>Call to customer <a href="#" className='text-info'>Jacob</a> and discuss the detail.</p>
                    </div>
                  </div>
                  <div className='sl-item b-info'>
                    <div className='sl-icon'>
                      <i className='fa fa-bolt'></i>
                    </div>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>3 days ago</div>
                      <p><a href="#" className='text-info'>Jessi</a> commented your post.</p>
                    </div>
                  </div>
                  <div className='sl-item b-warning'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>Thu, 10 Mar</div>
                      <p>Trip to the moon</p>
                    </div>
                  </div>
                  <div className='sl-item b-info'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>Sat, 5 Mar</div>
                      <p>Prepare for presentation</p>
                    </div>
                  </div>
                  <div className='sl-item'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>Sun, 11 Feb</div>
                      <p><a href="#" className='text-info'>Jessi</a> assign you a task <a href="#" className='text-info'>Mockup Design</a>.</p>
                    </div>
                  </div>
                  <div className='sl-item'>
                    <div className='sl-content'>
                      <div className='sl-date text-muted'>Thu, 17 Jan</div>
                      <p>Follow up to close deal</p>
                    </div>
                  </div>
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
  ></UserEditPanel>
  <div
    className="user-edit-panel-overlay"
    onClick={close_editing_panel_for_user_with_id(user_to_display.get('id'))}
  ></div>
</div>;

const map_state_to_props = ({users, circles}, own_props) => {
  const user_to_display = users
    .get(own_props.params.user_id, Map({needs_to_be_fetched: true}))
    .set('id', own_props.params.user_id);

  const circles_as_member = user_to_display.get('needs_to_be_fetched', false) ?
    List([]) :
    user_to_display
      .get('circles_as_member', List([]))
      .map(c_id => circles.get(c_id, Map({'needs_to_be_fetched': true}))
        .set('id', c_id));

  const circles_created = user_to_display.get('needs_to_be_fetched', false) ?
    List([]) :
    user_to_display
      .get('circles_created', List([]))
      .map(c_id => circles.get(c_id, Map({'needs_to_be_fetched': true}))
        .set('id', c_id));

  return {
    user_to_display,
    circles_as_member,
    circles_created
  };
};

const map_dispatch_to_props = dispatch => {
  const open_editing_panel_for_user_action = bindActionCreators(open_editing_panel_for_user, dispatch);
  const open_editing_panel_for_user_with_id = user_id =>
    () => open_editing_panel_for_user_action(user_id);

  const close_editing_panel_for_user_action = bindActionCreators(close_editing_panel_for_user, dispatch);
  const close_editing_panel_for_user_with_id = user_id =>
    () => close_editing_panel_for_user_action(user_id);

  const start_editing_attr_for_user_action = bindActionCreators(start_editing_attr_for_user, dispatch);
  const start_editing_attr_for_user_with_id = user_id =>
    attr_to_edit => () => start_editing_attr_for_user_action({user_id, attr_to_edit});

  const edit_user_action = bindActionCreators(edit_user, dispatch);
  const edit_user_attr_with_id = user_id =>
    attr_to_edit => e => edit_user_action({user_id, user_data: Map({}).set(attr_to_edit, e.target.value)});

  return {
    open_editing_panel_for_user_with_id,
    close_editing_panel_for_user_with_id,
    start_editing_attr_for_user_with_id,
    edit_user_attr_with_id
  };
};

export default connect(map_state_to_props, map_dispatch_to_props)(unconnected_view_user_component);
