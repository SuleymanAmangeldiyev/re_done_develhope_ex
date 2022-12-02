import React, { Component } from 'react'
import ClickTracker from './ClickTracker'
export class App extends Component {
  
  render() {
    return (
      <div>
        <ClickTracker />
      </div> 
    )
  }
}

export default App



// the ex: 25  (Event - 03)

//Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons, and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component. Tip: you can use the event object to access the target property of the event.