import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configure_store';
import Root from './containers/root';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import {initial_dev_state, initial_empty_state} from './dev_state';


// TODO detect env and do this if prod

// const get_state_from_local_storage = () => {
//   const json_state = JSON.parse(localStorage.getItem('stringified_state'));
//   return Object.keys(json_state || {})
//     .filter(key => key !== 'routing')
//     .reduce((reduction, key) => {
//       reduction[key] = fromJS(json_state[key]);
//       return reduction;
//     }, {});
// };

// const get_json_state_from_state = state => Object.keys(state).reduce((reduction, key) => {
//   const js_val = state[key].toJS ? state[key].toJS() : state[key];
//   reduction[key] = js_val;
//   return reduction;
// }, {});

//const store = configureStore(get_state_from_local_storage());

// store.subscribe(() => {
//   localStorage.setItem('stringified_state', JSON.stringify(get_json_state_from_state(store.getState())));
// });

// TODO and do this if dev

const get_initial_state = () => process.env.NODE_ENV !== 'productionkjkhj' ? initial_empty_state : initial_dev_state;

const initial_state = get_initial_state();

const store = configureStore(initial_state);

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
