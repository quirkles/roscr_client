import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configure_store';
import Root from './containers/root';
import {get_session_info} from './utils/requests/session';
import {set_session_data} from './actions/user_actions';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

const store = configureStore();


render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    const RootContainer = require('./containers/root').default;
    render(
      <AppContainer>
        <RootContainer store={store}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

get_session_info()
.then(
  ({data}) => store.dispatch(set_session_data(data)),
  error => console.log(error)
);
