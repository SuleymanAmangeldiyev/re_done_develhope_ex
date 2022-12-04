import React, { Component } from 'react'

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: "",
      todos: ["Works"],
    };
  }
  writing = (e) => {
    this.setState({
      lists: e.target.value,
    });
  };

  add = () => {
    this.setState({
      todos: [...this.state.todos, this.state.lists],
      lists: "",
    });
  };
  reset = () => {
    this.setState({
      todos: ["Works"],
    });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.writing} value={this.state.lists} />
        <button type="button" onClick={this.add}>
          add
        </button>
        <button type="button" onClick={this.reset}>
          reset
        </button>
        <ul>
          {this.state.todos.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList