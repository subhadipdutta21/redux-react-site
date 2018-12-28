import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import Signedinlinks from "./Signedinlinks";
import { connect } from "react-redux";

const Appbar = props => {
  const { auth } = props;
  console.log(auth);

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#563d7c" }}>
        <Toolbar>
          <IconButton
            style={{ marginLeft: "-12", marginRight: "20" }}
            color="inherit"
            aria-label="Menu"
          />

          <Typography
            variant="h5"
            color="inherit"
            gutterBottom
            style={{ flexGrow: "1", paddingLeft: "73px" }}
          >
            React-Redux
          </Typography>
          <Signedinlinks />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Appbar);
