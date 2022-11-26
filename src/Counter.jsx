import React, { Component } from 'react'

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
    return <h1>{this.state.count}</h1>;
  }
}

export default Counter