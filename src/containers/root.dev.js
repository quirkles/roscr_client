import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import DevTools from './dev_tools';
import {browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

const root = ({store}) => {

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <Provider store={store}>
      <div>
        <App history={history}/>
        <DevTools />
      </div>
    </Provider>
  );
};

export default root;
