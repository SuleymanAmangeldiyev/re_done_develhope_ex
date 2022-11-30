import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  addingOne (){
    this.setState( {
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.addingOne()}>count up</button>
      </div>
    )
  }
}

export default ClickCounter