import React from 'react';
import ReactDOM from 'react-dom';


import { configureStore } from './store/store.js';
import { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import { allTodos } from './reducers/selectors.js';
import { fetchTodos } from './actions/todo_actions.js';
import { $l } from './util/jql/main.js';

window.$l = $l;

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});
