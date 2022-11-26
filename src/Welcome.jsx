import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return <p> Welcome, {this.props.name}!</p>;
  }
}

Welcome.defaultProps = {
  name: 'Suleyman'
}
export default Welcome