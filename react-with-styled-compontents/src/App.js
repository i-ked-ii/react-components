import React, { Component } from "react";
// import logo from "./logo.svg";
import { Test, About, Home } from "./components/pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export const Routes = {
  home: "/",
  about: "/about",
  test: "/test",
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path={Routes.home} component={Home} />
          <Route exact path={Routes.about} component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
