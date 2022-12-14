import React, { Component } from "react";
import userCounter from "./lasts/userCounter";
export class App extends Component {
  render() {
    

    return (
      <div>
        <HookCounter />
      </div>
    );
  }
}

export default App;





function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    userCounter(initialValue);
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>add</button>
        <button onClick={onDecrement}>sub..</button>
        <button onClick={onReset}>reset</button>
      </div>
    );
}





