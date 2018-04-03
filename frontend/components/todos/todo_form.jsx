import React from 'react';
import { merge } from 'lodash';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  addTodo() {
    return (e) => {
      e.preventDefault();
      this.props.clearErrors();
      this.props.createTodo(this.state);
      this.setState({title: '', body: ''});
    };
  }

  render() {
    // debugger
    return (
      <form onSubmit={this.addTodo()}>
        Title
        <input onChange={this.update('title')} type="text" value={this.state.title}></input>
        Body
        <input onChange={this.update('body')}type="text" value={this.state.body}></input>
        <button>Submit</button>
      </form>
    );
  }
}
