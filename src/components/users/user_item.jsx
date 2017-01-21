import React from 'react';

import {get_avatar_url} from '../../utils/user_immutable'

const user_item_component = ({user}) =>
<div className='col-xs-6 col-sm-12 col-md-6'>
  <div className='box text-center'>
    <div className='p-a-md'>
      <p>
        <img src={get_avatar_url(user)} alt="." className='img-circle w-56'/>
      </p>
      <a href="#" className='text-md block'>{`${user.get('firstname')} ${user.get('lastname')}`}</a>
      <p>
        <small>London, UK</small>
      </p>
      <a href="#" className='btn btn-sm btn-outline rounded b-accent'>Follow</a>
    </div>
    <div className='row row-col no-gutter b-t warn'>
      <div className='col-xs-4 b-r'>
        <a className='p-y block text-center' >
          <strong className='block'>796</strong>
          <span className='block'>Friends</span>
        </a>
      </div>
      <div className='col-xs-4 b-r'>
        <a className='p-y block text-center' >
          <strong className='block'>342</strong>
          <span className='block'>Videos</span>
        </a>
      </div>
      <div className='col-xs-4'>
        <a className='p-y block text-center' >
          <strong className='block'>20</strong>
          <span className='block'>Photos</span>
        </a>
      </div>
    </div>
  </div>
</div>;

export default user_item_component;
