import React, { Component } from "react";
import UncontrolledLogin from "./UncontrolledLogin";
export class App extends Component {
  render() {
    return (
      <div>
        <UncontrolledLogin />
      </div>
    );
  }
}

export default App;

// the ex: 31  (Form - 06)

//Modify the UncontrolledLogin component so that the username input is automatically focused when the component renders the first time.
