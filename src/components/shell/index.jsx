import React from 'react';
import Sidebar from './sidebar';
import Header from './header';

const shell = ({children}) =>
<div>
  <Sidebar />
  <div id="content" className='app-content'>
    <Header />
    <div className="app-body">
      {React.cloneElement(children)}
    </div>
  </div>
</div>;

export default shell;

