import React, { Component } from 'react'

 class Hello extends Component {
  render() {
    return (
      <>
        <h1>"Hello, World!"</h1>
      <Message />
      </>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <>
        <p>"What a beautiful day!".</p>
      </>
    );
  }
}

export default Hello