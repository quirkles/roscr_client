import React from 'react';

const users_header_component = () =>
<div className='item bg-tile-ignasi users-header'>
  <div className="p-a-md">
    <div className="row m-t">
      <div className="col-sm-6">
        <div className="clear m-b">
          <h1 className="m-b-sm serif">Users Directory</h1>
        </div>
      </div>
      <div className="col-sm-6 serif bold text-md">
        <p>This page lists all ROSCr users.</p>
        <p>Use the search tools below to find buddies or invite users to circles you are in.</p>
      </div>
    </div>
  </div>
</div>;

export default users_header_component;
