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

// the ex: 27  (Form - 02)

// Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.