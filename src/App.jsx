import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  render() {
    return (
      <div><Welcome name='Suleyman' /></div>
    )
  }
}

export default App



// the ex: 09 (Props - 01)

// Create a Welcome class component that receives a name prop and renders the Welcome, {name}! message within a p tag. Render this component to you App component, passing it a name prop of your choosing.