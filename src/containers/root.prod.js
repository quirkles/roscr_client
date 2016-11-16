import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import {browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

const root = ({store}) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Provider store={store}>
      <App history={history} />
    </Provider>
  );
};

export default root;
