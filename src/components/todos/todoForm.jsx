import React from 'react';

export default ({todo, create_todo, edit_todo_text}) =>
<div className='todo-form'>
  <span className='input-wrapper'>
    <input
      id='new-todo-text-input'
      className='input-field'
      type="text"
      value={todo.get('text')}
      onChange={e => edit_todo_text('new_todo', e.target.value)}
      onKeyUp={e => {
        if (e.which === 13 && todo.get('text') !== '') {
          create_todo(todo.get('text'));
        }
      }}
    />
    <label htmlFor='new-todo-text-input' className='input-label'>
      <span className='input-label-content'>
        Enter Todo Text
      </span>
    </label>
  </span>
</div>;
