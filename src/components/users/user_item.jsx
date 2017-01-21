import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';

import {get_avatar_url} from '../../utils/user_immutable';

const get_footer_color = user => {
  const unique_int = user
    .get('id')
    .split('')
    .map(c => parseInt(c, 10))
    .filter(c => !isNaN(c))
    .reduce((sum, int) => sum + int, 0);
  const footer_colors = ['red', 'yellow', 'blue', 'orange', 'indigo'];
  return footer_colors[unique_int % footer_colors.length];
};

const user_item_component = ({user}) =>
<div className='col-xs-6 col-sm-12 col-md-6 user-item-component'>
  <div className='box text-center'>
    <div className='p-a-md'>
      <p>
        <img src={get_avatar_url(user)} alt="." className='img-circle w-56'/>
      </p>
      <Link
        to={`user/${user.get('id')}`}
        className='text-md block'>
          {`${user.get('firstname')} ${user.get('lastname')}`}
      </Link>
      <p>
        <small>London, UK</small>
      </p>
      <a className='btn btn-sm btn-outline rounded b-accent'>Send Buddy Request</a>
    </div>
    <div className={classnames('row row-col no-gutter', get_footer_color(user))}>
      <div className='col-xs-4 b-r'>
        <a className='p-y block text-center' >
          <strong className='block'>{user.get('circles_as_member').size}</strong>
          <span className='block'>Circles as Member</span>
        </a>
      </div>
      <div className='col-xs-4 b-r'>
        <a className='p-y block text-center' >
          <strong className='block'>{user.get('trust_score', 85)}</strong>
          <span className='block'>Trust Score</span>
        </a>
      </div>
      <div className='col-xs-4'>
        <a className='p-y block text-center' >
          <strong className='block'>{user.get('circles_created').size}</strong>
          <span className='block'>Circles Created</span>
        </a>
      </div>
    </div>
  </div>
</div>;

export default user_item_component;
