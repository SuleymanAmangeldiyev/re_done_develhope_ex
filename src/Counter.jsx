import React, { Component } from 'react'
import CounterDisplay from './CounterDisplay'
export class Counter extends Component {
  state = {
    count: Number(this.props.initial),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });
    }, this.props.increment);
  }

  render() {
    return (
      <>
        <CounterDisplay count={this.state.count} />
      </>
    );
  }
}

export default Counter