import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/Authactions";
import { Redirect } from "react-router-dom";

class Signedinlinks extends React.Component {
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <Toolbar>
        <Button color="inherit" onClick={this.props.signOut}>
          logout
        </Button>

        <Fab color="default" size="small" aria-label="Add">
          {profile.initials}
        </Fab>
      </Toolbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signedinlinks);
