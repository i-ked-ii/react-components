import React, { Component } from "react";
// import logo from "./logo.svg";
import { Test, About, Home } from "./components/pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import { Router } from "react-router";
// import history from "./utils/history";

export const Routes = {
  home: "/",
  about: "/about",
  test: "/test",
};

class App extends Component {
  render() {
    return (
      // <Router history={history}>
      //   <Switch>
      //     <Route exact path={Routes.test} component={Test} />
      //   </Switch>
      // </Router>
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
