import React from 'react';
import {Route, Router} from 'react-router';

import About from '../components/about';
import NotFound from '../components/not_found';
import Login from '../components/login';
import Signup from '../components/signup';
import Shell from '../components/shell';
import CreateCircle from '../components/circle/create';
import Circles from '../components/circles';
import ViewCircle from '../components/circle/view';
import ViewUser from '../components/user/view';

const routes =
  <Router>
    <Route component={Shell}>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/circles' component={Circles}></Route>
      <Route path='/circle/create' component={CreateCircle}></Route>
      <Route path='/circle/:circle_id' component={ViewCircle}></Route>
      <Route path='/user/:user_id' component={ViewUser}></Route>
      <Route path='/' component={About}></Route>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>;

const app = ({ history}) => <Router history={history}>{routes}</Router>;

export default app;
