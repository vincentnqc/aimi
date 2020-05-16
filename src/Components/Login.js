import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
  };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    console.log("hit", this.props);
    document.cookie = "loggedIn=true;max-age=60*1000";
    // this.props.history.push("/");
    // if (this.props.location.pathname=="/new" || this.props.location.pathname == "/New"){
    //   console.log("PROPSWASTRUE")
    //   this.props.history.push("/New")
    // }
    // else {
    //   return <Redirect to= "/" />
    // }
    this.setState ({loggedIn:true})
  };

  logOut = (e) => {
    document.cookie = "loggedIn=false; expires=Thu, 18 Dec 2013 12:00:00 UTC";
  };

  render() {
    console.log(this.state)
    return (
    this.state.loggedIn ? <Redirect to= "/" /> :(
      <div className="App">
        <Container className="please">
          Please Log In Before Continuing
        </Container>
        <Container className="loginContainer" maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <br></br>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br></br>

            <br></br>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              onClick={() => this.props.login()}
            >
              Login
            </Button>
            <br></br>
            <br></br>
            <Button
              className="login-button"
              variant="contained"
              color="primary"
              onClick={() => this.logOut()}
            >
              Log Out
            </Button>
          </form>
        </Container>
      </div>
    ));
  }
}

export default Login;
