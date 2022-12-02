import React, { Component } from "react";
import Login from "./Login";
export class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;

// the ex: 29  (Form - 04)

//Add a "reset" button to the Login component that clears the content of all three inputs when clicked.