import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Signedinlinks = () => {
  return (
    <Toolbar>
      <NavLink to="/login">
        <Button style={{ color: "white" }}>Login</Button>
      </NavLink>

      <NavLink to="/register">
        <Button style={{ color: "white" }}>Register</Button>
      </NavLink>
    </Toolbar>
  );
};

export default Signedinlinks;
