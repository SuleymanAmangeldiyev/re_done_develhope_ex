import React, { Component } from "react";
import TodoList from "./TodoList";
export class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;

// the ex: 34  (Lists - 05)

// Modify the TodoList by adding a "reset" button that clears the items array when clicked.