import React from 'react';
import {Link} from 'react-router';

import './aboutMe.scss';

const aboutMe = () =>
<div className='about-me'>
  <h2>React Redux Boilerplate</h2>
  <p>This is boilerplate for a react redux boilerplate for a web app client, powered by webpack and using es6.</p>
  <p>Why not check out the example <Link className='text-info' to='/todos/all'>todos</Link> application to get an idea how this boilerplate is structured.</p>
</div>;

export default aboutMe;
