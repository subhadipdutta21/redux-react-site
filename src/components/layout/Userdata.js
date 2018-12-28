import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import UserTable from "./UserTable";

import { CreateProject } from "../../store/actions/ProjectActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Userdata extends Component {
  state = {
    open: false,

    fname: "",
    lname: "",
    email: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.CreateProject(this.state);
  };

  render() {
    const { projects } = this.props;
    return (
      <div>
        <Paper elevation={5} style={{ padding: "30px" }}>
          <Typography variant="h5" component="h5">
            User
            <Fab
              variant="extended"
              aria-label="Delete"
              style={{ float: "right" }}
              onClick={this.handleClickOpen}
            >
              <AddIcon /> Add new user
            </Fab>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Add new user :</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="fname"
                  label="First name"
                  type="text"
                  onChange={this.handleChange}
                />
                {"     "}
                <TextField
                  margin="dense"
                  id="lname"
                  label="Last name"
                  type="text"
                  onChange={this.handleChange}
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  onChange={this.handleChange}
                  fullWidth
                />

                <Button
                  variant="contained"
                  style={{ marginTop: "40px" }}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
                {" "}
                <Button
                  variant="contained"
                  style={{ marginTop: "40px" }}
                  onClick={this.handleClose}
                >
                  Cancel
                </Button>
              </DialogContent>
            </Dialog>
          </Typography>
          <br />

          <UserTable projects={projects} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CreateProject: project => dispatch(CreateProject(project))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(Userdata);
