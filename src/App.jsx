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

// the ex: 33  (Lists - 04)

// Modify the TodoList component so that the input clears every time a Todo is added to the items array.