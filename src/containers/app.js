import React from 'react';
import {Route, Router} from 'react-router';

import Todos from '../components/todos';
import About from '../components/about';
import NotFound from '../components/notFound';
import Login from '../components/login';
import Signup from '../components/signup';
import Shell from '../components/shell';

const routes =
  <Router>
    <Route component={Shell}>
      <Route path='/todos' component={Todos} />
      <Route path='/todos/:filter' component={Todos} />
      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>
      <Route path='/' component={About}></Route>
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>;

const app = ({ history}) => <Router history={history}>{routes}</Router>;

export default app;
