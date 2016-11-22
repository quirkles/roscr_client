import { combineReducers } from 'redux';

import {routerReducer} from 'react-router-redux';
import circles from './circles_reducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  circles
});

export default rootReducer;
