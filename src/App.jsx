import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  render() {
    return (
      <div><Welcome /></div>
    )
  }
}

export default App



// the ex: 10 (Props - 02)

// What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?