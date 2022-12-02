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

// the ex: 28  (Form - 03)

// Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty. When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state.