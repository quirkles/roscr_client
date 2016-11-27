import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import cuid from 'cuid';

const get_trust_score_font_class = trust_score =>
  parseInt(trust_score, 10) < 75 ? 'red-500' :
  parseInt(trust_score, 10) < 85 ? 'yellow-500' :
  'green-500';

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
    to = {`/user/${circle_member.get('id')}`}
    className='list-left'
  >
    <img
      className='circle w-40 avatar'
      src={circle_member.get('avatar_url')}
    >
    </img>
  </Link>
  <div className='list-body'>
    <div>
      <Link
        to = {`/user/${circle_member.get('id')}`}
      >
        {circle_member.get('firstname')} {circle_member.get('lastname')}
      </Link>
    </div>
    <small
      className='text-muted text-ellipsis'
    >
      {circle_member.get('about_me', 'This user hasnt filled in their \'about me\' section :(')}
    </small>
  </div>
</li>;

export default circle_member_list_item_component;
