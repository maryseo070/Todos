import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO, receiveTodo, receiveTodos, removeTodo, UPDATE_TODO, updateTodo } from '../actions/todo_actions';
import { merge } from 'lodash';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = function(oldState = {}, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TODOS:
      const obj = {};
      action.todos.forEach( (todo) => (
        obj[todo.id] = todo
      ));
      return obj;
    case RECEIVE_TODO:
      return merge({}, oldState, {[action.todo.id] : action.todo});
    case REMOVE_TODO:
      let copy_todos = merge({}, oldState);
      delete copy_todos[action.todo.id];
      return copy_todos;
    case UPDATE_TODO:
      copy_todos = merge({}, oldState);
      copy_todos[action.todo.id].done = !action.todo.done;
      return copy_todos;
    default: return oldState;
  }
};
