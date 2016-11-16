import React from 'react';

import TodoItem from './todoItem';

const todoList = ({
  todos,
  toggle_todo_completed_state,
  delete_todo,
  edit_todo_text,
  start_editing_todo,
  stop_editing_todo
}) =>
<div>
  <ul>
    {todos.map((todo) =>
      <TodoItem
        key={todo.get('id')}
        todo={todo}
        toggle_todo_completed_state={toggle_todo_completed_state}
        delete_todo={delete_todo}
        edit_todo_text={edit_todo_text}
        start_editing_todo={start_editing_todo}
        stop_editing_todo={stop_editing_todo}
      />
    )}
  </ul>
</div>;

export default todoList;
