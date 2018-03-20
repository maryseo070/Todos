// import {} from 'redux';
import * as APIUtil from '../util/todo_api_util.js';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
import { receiveErrors } from './error_actions.js';

export const toggleDone = function(todo) {
  return function(dispatch) {
    APIUtil.toggleDone(todo).then(
      (responseTodo) => { dispatch(updateTodo(responseTodo)); },
      (errors) => { dispatch(receiveErrors(errors)); }
    );
  };
};


export const destroyTodo = function(todo) {
  return function(dispatch) {
    APIUtil.destroyTodo(todo).then( (goner) => {
      dispatch(removeTodo(goner));
    });
  };
};

export const updateTodo = function(todo) {
  return {
    type: UPDATE_TODO,
    todo
  };
};

export const addTodo = function(todo) {
  return function(dispatch) {
    APIUtil.addTodo(todo).then(
      (response) => { dispatch(receiveTodo(response)); },
      (error) => {dispatch(receiveErrors(error.responseJSON)); }
    );
  };
};

export const fetchTodos = function() {
  return function (dispatch) {
    APIUtil.fetchTodos().then( (response) => {
      dispatch(receiveTodos(response));
    });
  };
};

export const receiveTodos = function(arrOftodos) {
  return {
    type: RECEIVE_TODOS,
    todos: arrOftodos
  };
};

export const receiveTodo = function(todo) {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};

export const removeTodo = function(todo) {
  return {
    type: REMOVE_TODO,
    todo: todo
  };
};
