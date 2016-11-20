import {Map, fromJS} from 'immutable';

import todo_reducer from './todo';

import {
  EDIT_TODO_TEXT,
  CREATE_TODO,
  TOGGLE_TODO_COMPLETED_STATE,
  DELETE_TODO,
  START_EDITING_TODO,
  STOP_EDITING_TODO
} from '../constants/todos_constants';

const initial_state = fromJS({
  'new_todo': {
    text: '',
    is_complete: false
  }
});

const todos = (state = initial_state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state
        .set(action.todo_id, Map({
          text: action.todo_text,
          is_complete: false
        })).set('new_todo', Map({
          text: '',
          is_complete: false
        }));
    case DELETE_TODO:
      return state.delete(action.todo_id);
    case TOGGLE_TODO_COMPLETED_STATE:
    case EDIT_TODO_TEXT:
    case START_EDITING_TODO:
    case STOP_EDITING_TODO:
      return action.todo_id && state.get(action.todo_id) ?
        state.update(action.todo_id, todo => todo_reducer(todo, action)) :
        state;
    default:
      return state;
  }
};

export default todos;
