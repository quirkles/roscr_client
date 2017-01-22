import React from 'react';
import {Route, Router} from 'react-router';

import About from '../components/about';
import NotFound from '../components/not_found';
import Login from '../components/login';
import Signup from '../components/signup';
import Shell from '../components/shell';
import CreateCircle from '../components/circle/create';
import ListCircles from '../components/circles';
import ViewCircle from '../components/circle/view';
import ViewUser from '../components/user/view';
import ListUsers from '../components/users';

const routes =
  <Router>
    <Route component={Shell}>
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/circles' component={ListCircles}></Route>
      <Route path='/circles/create' component={CreateCircle}></Route>
      <Route path='/circles/:circle_id' component={ViewCircle}></Route>
      <Route path='/users/:user_id' component={ViewUser}></Route>
      <Route path='/users' component={ListUsers}></Route>
      <Route path='/' component={About}></Route>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>;

const app = ({ history}) => <Router history={history}>{routes}</Router>;

export default app;
