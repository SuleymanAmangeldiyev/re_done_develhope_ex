import React, { Component } from 'react'
import Welcome from './Welcome'
export class App extends Component {
  
  render() {
  const ady = "Aman"
    return (
      <div><Welcome age='24' name={ady}/></div>
    )
  }
}

export default App



// the ex: 13 (Props - 04)

// What happens if the name prop is a JSX expression instead of a string? How do you pass a prop that contains a JSX expression? Modify the value passed to the name prop so that it's contained within a strong tag.