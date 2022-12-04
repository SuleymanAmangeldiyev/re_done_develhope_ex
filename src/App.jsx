import React, { Component } from "react";
import Welcome from "./Welcome";

export class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
      </div>
    );
  }
}

export default App;

// the ex: 36  (Styling Components - 01)

// Create an index.css file and import it within the index.js file. Add a .welcome class to the Welcome component that changes its background color and adds a border.

