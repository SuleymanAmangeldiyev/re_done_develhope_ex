import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <>
        <p> Welcome, {this.props.name}!</p>
        <p>"Your age is {this.props.age}."</p>
      </>
    );
  }
}

Welcome.defaultProps = {
  name: 'Suleyman'
}
export default Welcome