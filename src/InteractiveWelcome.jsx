import React, { Component } from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends Component {
  state = {
    name: "",
  };

  addName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>
          <Welcome name={this.state.name} />
        </h1>
        <input type="text" onChange={this.addName} value={this.state.name} />
      </div>
    );
  }
}

export default InteractiveWelcome;
