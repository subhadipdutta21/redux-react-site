import React, { Component } from "react";
import "./App.css";

import Appbar from "./components/layout/Appbar";
import Login from "./components/layout/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Register from "./components/layout/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Appbar />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
