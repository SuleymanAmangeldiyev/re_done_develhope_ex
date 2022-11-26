import React, { Component } from 'react'
import CounterDisplay from './CounterDisplay'
export class Counter extends Component {
  state = {
    count: Number(this.props.initial)
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, this.props.increment);
  }

  render() {
    return <><CounterDisplay count={this.state.count}  /></>
  }
}

export default Counter