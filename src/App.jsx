import React, { Component } from 'react'
import Counter from './Counter'
export class App extends Component {
  
  render() {
    return (
      <div>
        <Counter initial='1' increment='2000'/>
      </div> 
    )
  }
}

export default App



// the ex: 22  (state - 04)

// Extract the h1 tag showing the count state variable into a new component called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.