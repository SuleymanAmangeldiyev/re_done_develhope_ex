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

// the ex: 37  (Styling Components - 03)

// Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's length is shorter than 8 characters, green otherwise.