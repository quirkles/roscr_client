import { createStore } from 'redux';
import rootReducer from '../reducers';

export default initial_state => createStore(rootReducer, initial_state);
