import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "Aman"
    return (
      <div><Welcome name={ady}/></div>
    )
  }
}

export default App



// the ex: 16 (Conditional Rendering - 02)

// Modify the Welcome component so that the Age component is rendered only if the age prop is present.