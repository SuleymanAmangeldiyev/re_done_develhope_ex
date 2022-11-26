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



// the ex: 21 (state - 03)

// Modify the Counter component so that the initial value of the counter, the increment interval and the increment amount are passed as props to the component.