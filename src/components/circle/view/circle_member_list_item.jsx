import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import {get_avatar_url, get_trust_score_font_class} from '../../../utils/user_immutable';

const circle_member_list_item_component = ({
  circle_member,
  circle_id,
  show_tooltip_with_data,
  destroy_tooltip_with_id
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
    <div
      className={classnames('serif text-muted italic user-savings-goal', {'can-edit-savings-goal': circle_member.getIn(['savings_goal', 'can_edit'])})}
    >{circle_member.getIn(['savings_goal', 'savings_goal'])}</div>
  </div>
</li>;

export default circle_member_list_item_component;
