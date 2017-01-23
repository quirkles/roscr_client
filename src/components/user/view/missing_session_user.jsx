import React from 'react';
import {Link} from 'react-router';

const missing_session_user_component = () =>
<div className="row">
  <div className="col-sm-8 offset-sm-2">
    <div className="box padding-4 margin-four text-center">
      <div className="box-body">
        <h1>
          <i className='fa fa-question fa-2x text-accent'></i>
        </h1>
        <h1 className='serif bold padding-half'>This is your profile page...</h1>
        <h4 className='serif bold padding-half'>but we don't know who you are!</h4>
        <p className='padding-half'>In order to view this page you need to log in.</p>
        <Link
          to='/login'
          className='btn btn-outline rounded b-success text-success margin-bottom-one'
        >Take me to the login page!</Link>
      </div>
    </div>
  </div>
</div>;

export default missing_session_user_component;
