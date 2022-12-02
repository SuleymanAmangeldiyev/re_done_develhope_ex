import React, { Component } from "react";
import InteractiveWelcome from "./InteractiveWelcome";
export class App extends Component {
  render() {
    return (
      <div>
        <InteractiveWelcome />
      </div>
    );
  }
}

export default App;

// the ex: 26  (Form - 01)

//Create an InteractiveWelcome component that renders an input tag and the Welcome component. Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.
