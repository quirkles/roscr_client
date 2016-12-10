import React, {Component} from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import DevTools from './dev_tools';
import {browserHistory} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

export default class Root extends Component {
  render () {
    const {store} = this.props;
    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Provider store={store}>
        <div>
          <App history={history}/>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

// const root = ({store}) => {
//
//
// };
//
// export default root;
