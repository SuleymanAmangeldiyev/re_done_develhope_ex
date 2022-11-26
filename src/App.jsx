import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "John"
    return (
      <div><Welcome name={ady}  age='4' /></div>
    )
  }
}

export default App



// the ex: 19 (Conditional Rendering - 05)

// Modify the Age component so that the "Your age is " message is rendered only if the age prop is greater than 18. Otherwise render the "You are very young!" message.