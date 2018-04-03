import { connect } from 'react-redux';
import { TodoList } from './todo_list.jsx';
import { allTodos, allErrors } from '../../reducers/selectors';
import { addTodo, receiveTodo, receiveTodos, fetchTodos, removeTodo, updateTodo, destroyTodo, toggleDone } from '../../actions/todo_actions.js';
import { clearErrors } from '../../actions/error_actions.js';



const mapStateToProps = (state) => {
  return {todos: allTodos(state), errors: allErrors(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    receiveTodos: (todos) => dispatch(receiveTodos(todos)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: (todo) => dispatch(addTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    clearErrors: () => dispatch(clearErrors()),
    destroyTodo: (todo) => dispatch(destroyTodo(todo)),
    toggleDone: (todo) => dispatch(toggleDone(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
