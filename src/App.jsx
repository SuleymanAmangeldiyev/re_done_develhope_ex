import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "Aman"
    return (
      <div><Welcome name={ady}  age='24' /></div>
    )
  }
}

export default App



// the ex: 17 (Conditional Rendering - 03)

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65..