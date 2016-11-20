import React from 'react';

const todoItem = ({
  todo,
  toggle_todo_completed_state,
  delete_todo,
  start_editing_todo,
  edit_todo_text,
  stop_editing_todo
}) =>
  <li className={'todo ' + (todo.get('is_complete') ? 'complete' : 'incomplete')}>
  {todo.get('is_editing') ?
    <div className='edit-todo-wrapper'>
      <input
        value={todo.get('text')}
        onChange={e => edit_todo_text(todo.get('id'), e.target.value)}
        onBlur={() => stop_editing_todo(todo.get('id'))}
        ref={i => i && i.focus()}
        onKeyUp={e => {
          if (e.which === 13 && todo.get('text') !== '') {
            stop_editing_todo(todo.get('id'));
          }
        }}
      />
    </div> :
    <div
      className='todo-text'
      onClick={() => start_editing_todo(todo.get('id'))}
    >
      <span>
        {todo.get('text')}
      </span>
    </div>
  }
    <div
        className='delete-todo'
        onClick={() => delete_todo(todo.get('id'))}
    >Delete</div>
    <div
      className='todo-status'
      onClick={() => toggle_todo_completed_state(todo.get('id'))}
    >
      {todo.get('is_complete') ? 'Mark Incomplete' : 'Mark Complete'}
    </div>
  </li>;

export default todoItem;
