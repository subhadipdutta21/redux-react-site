import React from "react";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { signUp } from "../../store/actions/Authactions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Register extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className="container"
        style={{
          width: "500px",
          margin: "auto",
          textAlign: "center",
          paddingTop: "50px"
        }}
      >
        <Paper style={{ padding: "50px" }} elevation={5}>
          <Typography component="h2" variant="display3" gutterBottom>
            Register
          </Typography>
          <TextField
            id="firstName"
            label="First name"
            type="text"
            margin="normal"
            fullWidth
            required
            autoFocus
            onChange={this.handleChange}
          />
          <TextField
            id="lastName"
            label="Last name"
            type="text"
            margin="normal"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <div>
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              onClick={this.handleSubmit}
            >
              sign up
            </Button>
            <div  style={{color:"red",margin:"auto"}}>
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
