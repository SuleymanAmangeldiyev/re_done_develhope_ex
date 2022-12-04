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

// the ex: 35  (Lists - 06)

// Modify the TodoList by adding a "remove" button to each li tag. When clicked, the event handler should remove corresponding item from the items array.