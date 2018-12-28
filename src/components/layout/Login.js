import React from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/Authactions";
import { Redirect } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;

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
           Log in
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            autoFocus
            required
            margin="normal"
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
          />{" "}
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={this.handleSubmit}
          >
            login
          </Button>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
