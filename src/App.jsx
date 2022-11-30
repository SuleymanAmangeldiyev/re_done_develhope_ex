import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
export class App extends Component {
  
  render() {
    return (
      <div>
        <ClickCounter />
      </div> 
    )
  }
}

export default App



// the ex: 24  (Event - 01)

// Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.