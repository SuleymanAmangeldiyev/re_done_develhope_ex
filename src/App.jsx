import React, { Component } from "react";
import Container from "./Container";

export class App extends Component {
  render() {
    return (
      <div>
        <Container title="This title">
          <div className="container">This is our container</div>
        </Container>
      </div>
    );
  }
}

export default App;

// the ex: 39  (Component Composition - 02)

// Modify the Container component so that it can display a title received within the title prop.