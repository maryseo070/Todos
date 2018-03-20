import React from 'react';


export const TodoItem = function({todo, destroyTodo, removeTodo, updateTodo, toggleDone }) {
  return (
    <li>
      <div>Task: {todo.title}</div>
      <div>Additional Resources: {todo.body}</div>
      <button onClick={ () => destroyTodo(todo) }>Delete me!</button>
      <button onClick={ () => toggleDone(todo) }>{ todo.done ? 'Undo' : 'Done' }</button>
    </li>
  );
};
