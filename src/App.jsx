import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "Aman"
    return (
      <div><Welcome name={ady} age='4'/></div>
    )
  }
}

export default App



// the ex: 15 (Conditional Rendering - 01)

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18