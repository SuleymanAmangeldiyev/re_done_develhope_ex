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



// the ex: 23  (Component Lifecycle - 01)

// Modify the Counter component so that the interval is initialized within the componentDidMount life cycle method instead of the constructor. Is the constructor still required?