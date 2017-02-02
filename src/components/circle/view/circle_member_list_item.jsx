import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import {get_avatar_url, get_trust_score_font_class} from '../../../utils/user_immutable';

const circle_member_list_item_component = ({
  circle_member,
  circle_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id,
  is_session_user,
  begin_editing_savings_goal,
  stop_editing_savings_goal,
  edit_savings_goal
}) =>
<li className='list-item'>
  <div className='list-right'>
    <div
      className={classnames('trust-score', get_trust_score_font_class(circle_member.get('trust_score')))}
      onMouseEnter = {
        show_tooltip_with_data({
          id: `circle-${circle_id}-member-${circle_member.get('id')}-trust-score`,
          title_text: 'I\'m a tooltip',
          body_text: 'Show a useful tool tip'
        })
      }
      onMouseLeave = {destroy_tooltip_with_id(`circle-${circle_id}-member-${circle_member.get('id')}-trust-score`)}
    >
      {circle_member.get('trust_score')}
    </div>
  </div>
  <Link
    to = {`/users/${circle_member.get('id')}`}
    className='list-left'
  >
    <img
      className='circle w-40 avatar'
      src={get_avatar_url(circle_member)}
    >
    </img>
  </Link>
  <div className='list-body'>
    <div>
      <Link to = {`/users/${circle_member.get('id')}`}>
        {circle_member.get('firstname')} {circle_member.get('lastname')}
      </Link>
    </div>
    <small className='text-muted text-ellipsis'>
      {circle_member.get('about_me', 'This user hasnt filled in their \'about me\' section :(')}
    </small>
    <div className='savings-goal'>
      {circle_member.getIn(['savings_goal', 'is_editing']) ?
        <input
          type='text'
          placeholder='Enter your savings goal for this circle'
          value={circle_member.getIn(['savings_goal', 'savings_goal'])}
          onBlur={stop_editing_savings_goal}
          onChange={edit_savings_goal}
          ref={i => i && i.focus()}
        /> :
      <div
        onClick={is_session_user && begin_editing_savings_goal}
        className={classnames('serif text-muted italic', {
          'can-edit-savings-goal': is_session_user
        })}
      >
        {circle_member.getIn(['savings_goal', 'savings_goal'], 'No savings goal entered for this user.')}
      </div>
      }
    </div>
    </div>
</li>;

export default circle_member_list_item_component;
