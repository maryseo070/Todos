import React from 'react';
import { TodoItem } from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render (){
    // debugger
    return (
      <div>
        <h3>¡La lista de cosas va aquí!</h3>
        <h4 className='error'>{this.props.errors}</h4>
        <ul>
          {
            this.props.todos.map( (todo) => {
              return <TodoItem destroyTodo={this.props.destroyTodo} toggleDone={this.props.toggleDone} key={todo.id} todo={todo} />;
            })
          }
        </ul>
        <div>
          <TodoForm clearErrors={this.props.clearErrors} createTodo={this.props.createTodo}/>
        </div>
      </div>
    );
  }
}
