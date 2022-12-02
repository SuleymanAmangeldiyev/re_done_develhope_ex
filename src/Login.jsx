import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
    login: false
  };

  control = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;
    const checked = e.target.checked;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
  labelIn = () =>{
    this.setState({
      login: true
    })
    alert("You loged in! ")
  }
  render() {
    return (
      <div>
        <label htmlFor="username">Username: </label>
        <input
          name="username"
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.control}
        />{" "}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.control}
        />{" "}
        <br />
        <label htmlFor="remember">Remember: </label>
        <input
          name="remember"
          type="checkbox"
          id="remember"
          value={this.state.remember}
        />
        <button
          type="button"
          disabled={!this.state.username || !this.state.password}
          onClick={this.labelIn}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
