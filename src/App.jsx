import React, { Component } from 'react'
import Hello from './Hello'
export class App extends Component {
  render() {
    return (
      <div><Hello /></div>
    )
  }
}

export default App



// the ex: 08 (Components - 07)

// Extract the "What a beautiful day!" message into a new component called Message and render it within the Hello component.