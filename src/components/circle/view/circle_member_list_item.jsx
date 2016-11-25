import React from 'react';
import {Link} from 'react-router';

const circle_member_list_item_component = ({
  circle_member
}) =>
<li className='list-item'>
  <Link
    to = {`/user/${circle_member.get('id')}`}
    className='list-left'
  >
    <img
      className="circle w-40 avatar"
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
    <small className='text-muted text-ellipsis'>{circle_member.get('about_me', 'This user hasnt filled in their \'about me\' section :(')}</small>
  </div>
</li>;

export default circle_member_list_item_component;
