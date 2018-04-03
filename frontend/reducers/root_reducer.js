import { combineReducers } from 'redux';
import { todosReducer } from './todos_reducer.js';
import { errorReducer } from './error_reducer.js';

export const rootReducer = combineReducers({todos: todosReducer, errors: errorReducer});
