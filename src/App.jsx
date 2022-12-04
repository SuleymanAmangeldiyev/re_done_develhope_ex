import React, { Component } from "react";
import Container from "./Container";

export class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="container">This is our container</div>
        </Container>
      </div>
    );
  }
}

export default App;

// the ex: 38  (Component Composition - 01)

// Create a Container component that renders its children within a div tag. Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.