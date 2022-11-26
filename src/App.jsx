import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  render() {
    return (
      <div><Welcome age='24' /></div>
    )
  }
}

export default App



// the ex: 11 (Props - 03)

// Modify the Welcome component so that it receives a second prop called age and renders it below the 'welcome' message, within a p tag after the message "Your age is ".