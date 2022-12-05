import React, { Component } from "react";
import Sum from "./Sum";
export class App extends Component {
  render() {
    
 const nums = [12, 32, 32, 21, 423, 21]
    return (
      <div>
    <Sum numbers={nums} />       
       
      </div>
    );
  }
}

export default App;

// the ex: 43  (Function Components - 01)

//Write a Sum function component that receives a numbers prop (expected to be an array of numbers) and renders the sum of all numbers in the array within a h1 tag.