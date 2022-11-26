import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "Aman"
    return (
      <div><Welcome name={ady} age='24'/></div>
    )
  }
}

export default App



// the ex: 14 (Props - 05)

//Extract the "Your age is " message into a new component called Age and render it within the Welcome component. Pass to the Age component the age prop that Welcome is receiving from the App component.