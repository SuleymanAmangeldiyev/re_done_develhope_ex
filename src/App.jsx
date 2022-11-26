import React, { Component } from 'react'
import Counter from './Counter'
export class App extends Component {
  
  render() {
  const ady = "John"
    return (
      <div>
        <Counter />
      </div>
    )
  }
}

export default App



// the ex: 20 (state - 01)

// Create a Counter class component with an internal state containing a count property, initialized to 0. The Counter component should render the count property within an h1 tag, and the count property should be incremented by 1 every second;