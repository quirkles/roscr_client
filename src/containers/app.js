import React from 'react';
import {Route, Router} from 'react-router';

import Todos from '../components/todos';
import About from '../components/about';
import NotFound from '../components/notFound';
import Shell from '../components/shell';

const routes =
  <Router>
    <Route component={Shell}>
      <Route path='/todos' component={Todos} />
      <Route path='/todos/:filter' component={Todos} />
      <Route path='/' component={About}></Route>
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>;

const app = ({ history}) => <Router history={history}>{routes}</Router>

export default app;