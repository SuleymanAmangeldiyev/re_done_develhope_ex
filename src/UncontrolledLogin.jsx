import React, { Component } from "react";

class UncontrolledLogin extends Component {
  constructor() {
    super();

    this.username = React.createRef();
    this.password = React.createRef();
    this.remember = React.createRef();
  }

  submits = (e) => {
    e.preventDefault();
    console.log(this.username.current.value);
    console.log(this.password.current.value);
    console.log(this.remember.current.checked);
  };
  render() {
    return (
      <form onSubmit={this.submits}>
        <label htmlFor="username">Username: </label>
        <input name="username" type="text" id="username" ref={this.username} />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          id="password"
          ref={this.password}
        />
        <br />
        <label htmlFor="remember">Remember: </label>
        <input
          name="remember"
          type="checkbox"
          id="remember"
          ref={this.remember}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;
