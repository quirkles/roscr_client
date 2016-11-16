import React from 'react';
import {Link} from 'react-router';
const todoFilter = ({filter}) =>
<div className='todo-filter'>
  <Link className={filter === 'all' ? 'active' : ''} to='/todos/all'>All</Link>
  <Link className={filter === 'complete' ? 'active' : ''} to='/todos/complete'>Complete</Link>
  <Link className={filter === 'incomplete' ? 'active' : ''} to='/todos/incomplete'>Incomplete</Link>
</div>;

export default todoFilter;
